import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/works',
    name: 'Works',
    component: Works
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
