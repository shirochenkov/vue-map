<script>
import L from 'leaflet'
const cupcakeIcon = require('../assets/cupcake.png')

export default {
  data () {
    return {
      cupcakes: '',
      cupcakeLayers: L.featureGroup([])
    }
  },
  watch: {
    layers: function (val) {
      if (val.includes('cupcake') && !this.cupcakes) {
        this._getCupcakes()
      } else if (!val.includes('cupcake') && this.cupcakes) {
        this._removeCupcakeLayer()
      }
    }
  },
  methods: {
    _getCupcakes: function () {
      this.$http.get('/cupcakes').then(response => {
        this.cupcakes = response.body
        this._initCupcakeLayer()
      })
    },
    _initCupcakeLayer: function () {
      let { map, cupcakeLayers, cupcakes } = this
      let myIcon = L.icon({
        iconUrl: cupcakeIcon,
        iconSize: [32, 32],
        iconAnchor: [32, 32],
        popupAnchor: [-16, -32]
      })

      cupcakes.map(cupcake => {
        let marker = L.marker([cupcake.lat, cupcake.lng], {icon: myIcon}).addTo(cupcakeLayers)
        marker.bindPopup(`<b>Cupcake!</b><br>lat: ${cupcake.lat}<br>lng: ${cupcake.lng}`)
      })

      cupcakeLayers.addTo(map)
    },
    _removeCupcakeLayer: function () {
      let { map, cupcakeLayers } = this
      map.removeLayer(cupcakeLayers)
      this.cupcakes = ''
    }
  }
}
</script>
