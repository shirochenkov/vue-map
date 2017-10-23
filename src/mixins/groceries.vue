<script>
import L from 'leaflet'
const groceriesIcon = require('../assets/groceries.png')

export default {
  data () {
    return {
      groceries: '',
      groceriesLayer: L.featureGroup([])
    }
  },
  watch: {
    chekedLayers: function (val) {
      if (val.includes('groceries') && !this.groceries) {
        this._getGroceries()
      } else if (!val.includes('groceries') && this.groceries) {
        this._removeGroceriesLayer()
      }
    }
  },
  methods: {
    _getGroceries: function () {
      this.$http.get('/groceries').then(response => {
        this.groceries = response.body
        this._initGroceriesLayer()
      })
    },
    _initGroceriesLayer: function () {
      let { map, groceriesLayer, groceries } = this
      let myIcon = L.icon({
        iconUrl: groceriesIcon,
        iconSize: [32, 32],
        popupAnchor: [0, -16]
      })

      groceries.map(groceries => {
        let marker = L.marker([groceries.lat, groceries.lng], {icon: myIcon}).addTo(groceriesLayer)
        marker.bindPopup(`<b>Groceries!</b><br>lat: ${groceries.lat}<br>lng: ${groceries.lng}`)
      })

      groceriesLayer.addTo(map)
    },
    _removeGroceriesLayer: function () {
      let { map, groceriesLayer } = this
      map.removeLayer(groceriesLayer)
      this.groceries = ''
    }
  }
}
</script>
