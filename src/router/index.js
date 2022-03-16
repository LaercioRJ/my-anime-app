import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePageVue from '../views/HomePage.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePageVue }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
