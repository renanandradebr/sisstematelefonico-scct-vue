import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import paginaView from '../views/cadastroTelView.vue'
import login from '../views/loginView.vue'
import Contatos from '../views/contatosView.vue' 
import backup from '../views/backupsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/loginPage',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,

   
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import(
       '../components/cadastroUsuario.vue')
  },
  {
    path:'/contatos',
    name: 'contatos',
    component: Contatos
  },
  {
    path:'/cadastroTelefone',
    name:'cadastro telefone',

    component: paginaView
  },
  {
    path:'/backups',
    name:'solicitarBackups',
    component: backup}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
