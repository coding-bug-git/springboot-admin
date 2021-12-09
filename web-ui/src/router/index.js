import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // alias: '/sys',
    name: 'Layout',
    component: () => import('@/components/Layout'),
    redirect: '/user',
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/User')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home')
      }
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '@/views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
