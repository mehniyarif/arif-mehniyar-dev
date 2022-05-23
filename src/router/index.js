import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/main.vue'
import HomeView from '@/views/home.vue'
import store from "@/store";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
          {
            path: '',
            name: 'home',
            component: HomeView,
            meta: { guest: true }
          },
          {
            path: 'about',
            name: 'about',
            meta: { guest: true },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
          },
          {
            path: 'npm-packages',
            name: 'NPM Packages',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "npm-packages" */ '../views/npm-packages.vue')
          },
          {
            path: 'experiences',
            name: 'Experiences',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "experiences" */ '../views/experiences.vue')
          },
          {
            path: 'django-experiences',
            name: 'Django Experiences',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "django-experiences" */ '../views/django-experiences.vue')
          },
          {
            path: 'vue-experiences',
            name: 'Vue Experiences',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "vue-experiences" */ '../views/vue-experiences.vue')
          },
          {
            path: 'technologies',
            name: 'Technologies',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "technologies" */ '../views/technologies.vue')
          },
          {
            path: 'tools',
            name: 'Tools',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "tools" */ '../views/tools.vue')
          },
          {
            path: 'work-areas',
            name: 'Areas I Want To Work',
            meta: { guest: true },
            component: () => import(/* webpackChunkName: "work-areas" */ '../views/work-areas.vue')
          },
          {
            path: 'word-or-phrase',
            name: 'Word or Phrase',
            meta: { requiresAuth: true },
            component: () => import(/* webpackChunkName: "word-or-phrase" */ '../views/word-or-phrase.vue')
          },
          {
            path: 'random-sentence',
            name: 'Random Sentence',
            meta: { requiresAuth: true },
            component: () => import(/* webpackChunkName: "random-sentence" */ '../views/random-sentence.vue')
          }
      ]
  },
  {
    path: '/terminal',
    component: () => import(/* webpackChunkName: "terminal" */ '../layouts/terminal'),
    children: [
          {
            path: '',
            name: 'terminal',
            meta: { guest: true },
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

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.activeUser.registered) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

export default router
