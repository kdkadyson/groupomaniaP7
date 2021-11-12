import { createRouter, createWebHistory } from "vue-router"
import Accueil from "@/views/Accueil.vue"
import Login from "@/views/Login.vue"
import Signin from "@/views/Signin.vue"
import Notif from "@/views/Notif.vue"
import CommentList from "@/views/CommentList.vue"
import CommentDetails from "@/views/CommentDetails.vue"
import CommentCreate from "@/views/CommentCreate.vue"
import Profile from "@/views/Profile.vue"
import Staff from "@/views/Staff.vue"
import ErrorDisplay from '@/views/ErrorDisplay.vue'


const routes = [
 {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/comments",
    name: "CommentList",
    component: CommentList,
    meta: {requiresAuth : true}//add custom attributes to route
  },
  {
    path: "/comment/:id",// : => dynamic => passed in component as props)
    name: "CommentDetails",
    props: true,
    component: CommentDetails
  },
  {
    path: "/comment/create",
    name: "CommentCreate",
    component: CommentCreate
  },
  {
    path: "/notif",
    name: "Notif",
    component: Notif
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff
    
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
    // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user")

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn){
    next("/")
  }
  next()//continues navigation
})

export default router
