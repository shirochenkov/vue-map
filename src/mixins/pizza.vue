<script>
import L from 'leaflet'
const pizzaIcon = require('../assets/pizza.png')

export default {
  data () {
    return {
      pizza: '',
      pizzaLayer: L.featureGroup([])
    }
  },
  watch: {
    chekedLayers: function (val) {
      if (val.includes('pizza') && !this.pizza) {
        this._getPizza()
      } else if (!val.includes('pizza') && this.pizza) {
        this._removePizzaLayer()
      }
    }
  },
  methods: {
    _getPizza: function () {
      this.$http.get('/pizza').then(response => {
        this.pizza = response.body
        this._initPizzaLayer()
      })
    },
    _initPizzaLayer: function () {
      let { map, pizzaLayer, pizza } = this
      let myIcon = L.icon({
        iconUrl: pizzaIcon,
        iconSize: [32, 32],
        popupAnchor: [0, -16]
      })

      pizza.map(pizza => {
        let marker = L.marker([pizza.lat, pizza.lng], {icon: myIcon}).addTo(pizzaLayer)
        marker.bindPopup(`<b>Pizza!</b><br>lat: ${pizza.lat}<br>lng: ${pizza.lng}`)
      })

      pizzaLayer.addTo(map)
    },
    _removePizzaLayer: function () {
      let { map, pizzaLayer } = this
      map.removeLayer(pizzaLayer)
      this.pizza = ''
    }
  }
}
</script>
