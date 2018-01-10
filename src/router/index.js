import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import DataBinding from 'pages/DataBinding'
import ComputedAndWatch from 'pages/ComputedAndWatch'
import PropsAndEvents from 'pages/PropsAndEvents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/data-binding',
      name: 'DataBinding',
      component: DataBinding
    },
    {
      path: '/computed-and-watch',
      name: 'ComputedAndWatch',
      component: ComputedAndWatch
    },
    {
      path: '/props-and-events',
      name: 'PropsAndEvents',
      component: PropsAndEvents
    }
  ]
})
