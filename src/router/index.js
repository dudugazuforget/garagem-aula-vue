import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import AcessorioView from '../views/AcessorioView.vue';
import CategoriaView from '../views/CategoriaView.vue';
import CorView from '../views/CorView.vue';
import Loginview from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue'
import MarcaView from '../views/MarcaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/acessorio',
      name: 'acessorio',
      component: AcessorioView,
    },
    {
      path: '/categoria',
      name: 'categoria',
      component: CategoriaView,
    },
    {
      path: '/cor',
      name: 'cor',
      component: CorView,
    },
    {
      path: '/Login',
      name: 'login',
      component: Loginview,
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
    },
    {
      path: '/marca',
      name: 'marca',
      component: MarcaView,
    },
  ],
});

export default router;