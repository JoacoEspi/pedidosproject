import { createRouter, createWebHistory } from '@ionic/vue-router' //PERMITE LA TRANSICION ENTRE LAS RUTAS
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView
    }
  ]
})

export default router
