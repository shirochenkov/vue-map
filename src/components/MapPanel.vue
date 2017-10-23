<template>
  <div class="map-panel">
    <div v-for="layer in layers">
      <input type="checkbox" :id="layer.type" :value="layer.value" @click="checkIt" v-model="layer.enable">
      <label :for="layer.type">{{ layer.type }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPanel',
  mounted: function () {
    this._initLayers()
  },
  props: ['layers'],
  methods: {
    checkIt: function (event) {
      let { checked, value } = event.target
      checked ? this.$emit('addType', value) : this.$emit('removeType', value)
    },
    _initLayers: function () {
      this.layers.map(layer => {
        if (layer.enable) this.$emit('addType', layer.value)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-panel {
  position: absolute;
  z-index: 999;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, .85);
  border-radius: 4px;
  padding: 10px 20px;
}
</style>
