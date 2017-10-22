<script>
import L from 'leaflet'
const groceriesIcon = require('../assets/groceries.png')

export default {
  data () {
    return {
      groceries: '',
      groceriesLayers: L.featureGroup([])
    }
  },
  watch: {
    layers: function (val) {
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
      let { map, groceriesLayers, groceries } = this
      let myIcon = L.icon({
        iconUrl: groceriesIcon,
        iconSize: [32, 32],
        iconAnchor: [32, 32],
        popupAnchor: [-16, -32]
      })

      groceries.map(groceries => {
        let marker = L.marker([groceries.lat, groceries.lng], {icon: myIcon}).addTo(groceriesLayers)
        marker.bindPopup(`<b>Groceries!</b><br>lat: ${groceries.lat}<br>lng: ${groceries.lng}`)
      })

      groceriesLayers.addTo(map)
    },
    _removeGroceriesLayer: function () {
      let { map, groceriesLayers } = this
      map.removeLayer(groceriesLayers)
      this.groceries = ''
    }
  }
}
</script>
