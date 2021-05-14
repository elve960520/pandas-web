import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/App.vue'
import Home from '../views/Home.vue'
import Manage from '../views/Manage.vue'
import About from '../views/About.vue'

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
    component:Home
  },
  {
    path: '/manage',
    name:'manage',
    component:Manage
  },
  {
    path:'/about',
    name:'about',
    component:About
  }
]

const router = new VueRouter({
  routes
})

export default router
