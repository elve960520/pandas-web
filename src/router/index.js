import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/App.vue'
import home from '../views/home.vue'
import manage from '../views/manage.vue'
import about from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    redirect:'home'
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path: '/manage',
    name:'manage',
    component:manage
  },
  {
    path:'/about',
    name:'about',
    component:about
  }
]

const router = new VueRouter({
  routes
})

export default router
