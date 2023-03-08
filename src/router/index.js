import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import WorksHome from '@/views/WorksHome.vue'
import WorksPage from '@/views/WorksPage.vue'
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
    component: Works,
    children:[
      {
        path:'',
        component: WorksHome,
      },
      {
        path:'worksPage/:id',
        component: WorksPage,
      }
    ]
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path:'/:pathMatch(.*)*',  //全部的母層及子層
    component: () =>
    import( "../views/NotFound.vue"),
  },
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router