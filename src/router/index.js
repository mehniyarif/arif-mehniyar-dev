import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/main.vue'
import HomeView from '@/views/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout,
    children: [
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
            component: () => import(/* webpackChunkName: "npm-packages" */ '../views/npm-packages.vue')
          },
          {
            path: '/experiences',
            name: 'Experiences',
            component: () => import(/* webpackChunkName: "experiences" */ '../views/experiences.vue')
          },
          {
            path: '/django-experiences',
            name: 'Django Experiences',
            component: () => import(/* webpackChunkName: "django-experiences" */ '../views/django-experiences.vue')
          },
          {
            path: '/vue-experiences',
            name: 'Vue Experiences',
            component: () => import(/* webpackChunkName: "vue-experiences" */ '../views/vue-experiences.vue')
          },
          {
            path: '/technologies',
            name: 'Technologies',
            component: () => import(/* webpackChunkName: "technologies" */ '../views/technologies.vue')
          },
          {
            path: '/tools',
            name: 'Tools',
            component: () => import(/* webpackChunkName: "tools" */ '../views/tools.vue')
          },
          {
            path: '/work-areas',
            name: 'Areas I Want To Work',
            component: () => import(/* webpackChunkName: "work-areas" */ '../views/work-areas.vue')
          }
      ]
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: () => import(/* webpackChunkName: "terminal" */ '../layouts/terminal'),
    children: [
          {
            path: '/',
            name: 'console',
            component: () => import(/* webpackChunkName: "console" */ '../views/terminal')
          },
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
