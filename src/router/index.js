import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultancyView from '@/views/ConsultancyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },

  {
    path: '/consultoria',
    component: ConsultancyView
  },
]

const router = new VueRouter({
  routes
})

export default router
