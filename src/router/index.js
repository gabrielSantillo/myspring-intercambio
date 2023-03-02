import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultancyView from '@/views/ConsultancyView.vue'
import PathwayView from '@/views/PathwayView.vue'

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

  {
    path: '/pathway',
    component: PathwayView
  },
]

const router = new VueRouter({
  routes
})

export default router
