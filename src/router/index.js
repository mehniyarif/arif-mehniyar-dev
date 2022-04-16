import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/npm-packages',
    name: 'NPM Packages',
    component: () => import(/* webpackChunkName: "about" */ '../views/npm-packages.vue')
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/experiences.vue')
  },
  {
    path: '/django-experiences',
    name: 'Django Experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/django-experiences.vue')
  },
  {
    path: '/vue-experiences',
    name: 'Vue Experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/vue-experiences.vue')
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: () => import(/* webpackChunkName: "about" */ '../views/technologies.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "about" */ '../views/tools.vue')
  },
  {
    path: '/work-areas',
    name: 'Areas I Want To Work',
    component: () => import(/* webpackChunkName: "about" */ '../views/work-areas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
