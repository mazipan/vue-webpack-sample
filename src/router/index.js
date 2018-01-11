import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'

import DataBinding from '@/pages/DataBinding'
import ComputedAndWatch from '@/pages/ComputedAndWatch'
import PropsAndEvents from '@/pages/PropsAndEvents'
import LearnApi from '@/pages/LearnApi'
import LearnVuex from '@/pages/LearnVuex'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/learn-api',
      name: 'LearnApi',
      component: LearnApi
    },
    {
      path: '/learn-vuex',
      name: 'LearnVuex',
      component: LearnVuex
    }
  ]
})
