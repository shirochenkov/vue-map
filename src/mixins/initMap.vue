<script>
import L from 'leaflet'

export default {
  mounted: function () {
    this._initMap()
  },
  methods: {
    _initMap: function () {
      let map = L.map(this.$refs.map, { zoomControl: false }).setView([55.75300866197417, 37.6223373413086], 13)

      L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(map)

      new L.Control.Zoom({ position: 'topright' }).addTo(map)

      this.$set(this, 'map', map)
    }
  }
}
</script>
