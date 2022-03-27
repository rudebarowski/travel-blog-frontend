import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import About from "@/views/About"
import Login from "@/views/Login"
import Dashboard from "@/views/Dashboard"
import User from "@/views/User"
import Blog from '@/views/Blog'
import AddBlog from '@/views/Addblog'
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
    component: Dashboard
  },
  {
    path: '/admin/user',
    name: 'User',
    component: User
  },
  {
    path: '/admin/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin/add-blog',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/admin/edit-profile',
    name: 'AddUser',
    component: AddUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
