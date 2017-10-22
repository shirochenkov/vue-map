<script>
import L from 'leaflet'
const pizzaIcon = require('../assets/pizza.png')

export default {
  data () {
    return {
      pizza: '',
      pizzaLayers: L.featureGroup([])
    }
  },
  watch: {
    layers: function (val) {
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
      let { map, pizzaLayers, pizza } = this
      let myIcon = L.icon({
        iconUrl: pizzaIcon,
        iconSize: [32, 32],
        iconAnchor: [32, 32],
        popupAnchor: [-16, -32]
      })

      pizza.map(pizza => {
        let marker = L.marker([pizza.lat, pizza.lng], {icon: myIcon}).addTo(pizzaLayers)
        marker.bindPopup(`<b>Pizza!</b><br>lat: ${pizza.lat}<br>lng: ${pizza.lng}`)
      })

      pizzaLayers.addTo(map)
    },
    _removePizzaLayer: function () {
      let { map, pizzaLayers } = this
      map.removeLayer(pizzaLayers)
      this.pizza = ''
    }
  }
}
</script>
