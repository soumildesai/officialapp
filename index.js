import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskManager from '../views/TaskManager.vue'
import AddTask from '../views/AddTask.vue'
import EditTask from '../views/EditTask.vue'
import Login from '../views/Login.vue'
import {appAuth} from '../firebase/config'
import NotFound from '../views/NotFound.vue'
//auth guard
const requireAuth = (to, from, next) => {
  let user = appAuth.currentUser
  if(!user){
    next({name: 'Login'})
  } else{
    next()
  }
}
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskManager,
    beforeEnter: requireAuth
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask,
    beforeEnter: requireAuth
  },
  {
    path: '/tasks/:id',
    name: 'EditTask',
    component: EditTask,
    props: true,
    beforeEnter: requireAuth
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
})
export default router
