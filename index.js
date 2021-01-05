import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskManager from '../views/TaskManager.vue'
import AddTask from '../views/AddTask.vue'
import EditTask from '../views/EditTask.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TaskManager
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/tasks/:id',
    name: 'EditTask',
    component: EditTask,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
