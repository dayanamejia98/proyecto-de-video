import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Registro from '../components/Registro';
import Usuario from '../components/Usuario'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/registro',
    component: Registro
  },
  {
    path: '/usuario',
    component: Usuario
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
