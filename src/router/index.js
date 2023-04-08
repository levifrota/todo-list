import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import DisplayVue from '../views/display/DisplayVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/display',
    name: 'display',
    component: DisplayVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
