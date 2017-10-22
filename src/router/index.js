import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'

import '../css/style.css'

import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import MockData from '../server'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueResourceMock, MockData)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    }
  ]
})
