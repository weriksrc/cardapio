import Vue from 'vue'
import VueRouter from 'vue-router'
import Cardapio from '../views/Cardapio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cardapio',
    component: Cardapio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
