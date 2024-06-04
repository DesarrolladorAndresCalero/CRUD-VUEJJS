import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteNew from '../views/ClienteNew.vue'
import ClienteEdit from '../views/ClienteEdit.vue'
import ClienteView from '../views/ClienteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createCliente',
    name: 'create',
    component: ClienteNew
  },
  {
    path: '/editCliente/:id',
    name: 'edit',
    component: ClienteEdit
  },
  {
    path: '/viewCliente/:id',
    name: 'view',
    component: ClienteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
