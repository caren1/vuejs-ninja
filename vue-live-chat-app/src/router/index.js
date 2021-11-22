import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
import { projectAuth } from '../firebase/config'

// route guard -  auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next(); 
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Chatroom' }); 
  } else {
    next();
  }
}

const routes = [
  {
    name: "Welcome",
    path: '/',
    component: Welcome,
    beforeEnter: requireNoAuth
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
