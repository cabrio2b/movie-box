import { createRouter, createWebHistory } from 'vue-router'
import ConnectPageView from '@/views/ConnectPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ConnectPageView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
