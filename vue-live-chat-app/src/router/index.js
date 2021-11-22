import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
import { projectAuth } from '../firebase/config'

// route guard -  auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('user from auth', user);
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next(); 
  }
}

const routes = [
  {
    name: "Welcome",
    path: '/welcome',
    component: Welcome
  },
  {
    name: 'Chatroom',
    path: '/chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
