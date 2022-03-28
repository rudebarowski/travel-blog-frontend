import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import About from "@/views/About"
import Login from "@/views/Login"
import Dashboard from "@/views/Dashboard"
import User from "@/views/User"
import Blog from '@/views/Blog'
import AddBlog from '@/views/Addblog'
import EditProfile from '@/views/EditProfile'
import AddUser from '@/views/AddUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/user',
    name: 'User',
    component: User,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/add-blog',
    name: 'AddBlog',
    component: AddBlog,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/edit-profile',
    name: 'EditProfile',
    component: EditProfile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/add-user',
    name: 'AddUser',
    component: AddUser,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
