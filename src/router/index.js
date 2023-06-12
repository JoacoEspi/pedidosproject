import { createRouter, createWebHistory } from '@ionic/vue-router' //PERMITE LA TRANSICION ENTRE LAS RUTAS
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import ProductosView from '../views/ProductosView.vue'
import ReporteView from '../views/ReporteView.vue'
import CarritoView from '../views/CarritoView.vue'
import EliminacionView from '../views/EliminacionView.vue'
import DetallesProductoView from '../views/DetallesProductoView.vue'

/* Se indican las rutas contenidas en el Proyecto*/
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
    },
    {
      path: '/reporte',
      name: 'reporte',
      component: ReporteView
    },
    {
      path: '/eliminacion/:id',
      name: 'eliminacion',
      component: EliminacionView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CarritoView
    },
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: DetallesProductoView
    }
    
  ]
})

export default router
