<template>
  <div class="wrapper">
    <div ref="map" class="map"></div>
    <map-panel @addType="addType" @removeType="removeType" :layers="layers"></map-panel>
  </div>
</template>

<script>
import initMap from '@/mixins/initMap'
import cupcake from '@/mixins/cupcake'
import groceries from '@/mixins/groceries'
import pizza from '@/mixins/pizza'
import MapPanel from '@/components/MapPanel'

export default {
  name: 'Map',
  mixins: [initMap, cupcake, groceries, pizza],
  data () {
    return {
      map: '',
      chekedLayers: [],
      layers: [
        { value: 'cupcake', type: 'Cupcake', enable: true },
        { value: 'groceries', type: 'Groceries', enable: false },
        { value: 'pizza', type: 'Pizza', enable: false }
      ]
    }
  },
  components: { MapPanel },
  methods: {
    addType: function (el) {
      this.chekedLayers.push(el)
    },
    removeType: function (el) {
      let { chekedLayers } = this
      let index = chekedLayers.indexOf(el)
      if (~index) { chekedLayers.splice(index, 1) }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper,
.map {
  height: 100%;
}
</style>
