import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import ShowDetail from '@/views/ShowDetail'
import SearchedShows from '@/views/SearchedShows'
import Error from '@/components/utility/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard', name: 'Dashboard', component: Dashboard
  },
  {
    path: '/', redirect: { name: 'Dashboard' }
  },
  {
    path: '/shows/:id', name: 'Show Detail', component: ShowDetail
  },
  {
    path: '/search', name: 'Searched Shows', component: SearchedShows
    /* component: () => import('../views/SearchedShows.vue') */
  },
  {
    path: '*', name: '404', component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
