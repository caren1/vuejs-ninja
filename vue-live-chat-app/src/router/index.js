import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'

const routes = [
  {
    name: "Welcome",
    path: '/welcome',
    component: Welcome
  },
  {
    name: 'Chatroom',
    path: '/chatroom',
    component: Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
