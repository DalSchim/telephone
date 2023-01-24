import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import JournalView from  '@/views/JournalView.vue'
import ClavierView from '@/views/ClavierView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
