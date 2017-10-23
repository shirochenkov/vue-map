<script>
import L from 'leaflet'
const cupcakeIcon = require('../assets/cupcake.png')

export default {
  data () {
    return {
      cupcakes: '',
      cupcakeLayer: L.featureGroup([])
    }
  },
  watch: {
    chekedLayers: function (val) {
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
      let { map, cupcakeLayer, cupcakes } = this
      let myIcon = L.icon({
        iconUrl: cupcakeIcon,
        iconSize: [32, 32],
        popupAnchor: [0, -16]
      })

      cupcakes.map(cupcake => {
        let marker = L.marker([cupcake.lat, cupcake.lng], {icon: myIcon}).addTo(cupcakeLayer)
        marker.bindPopup(`<b>Cupcake!</b><br>lat: ${cupcake.lat}<br>lng: ${cupcake.lng}`)
      })

      cupcakeLayer.addTo(map)
    },
    _removeCupcakeLayer: function () {
      let { map, cupcakeLayer } = this
      map.removeLayer(cupcakeLayer)
      this.cupcakes = ''
    }
  }
}
</script>
