import { createRouter, createWebHistory } from "vue-router";

import Accueil from "@/views/Accueil.vue";
import Login from "@/views/Login.vue";
import Signin from "@/views/Signin.vue";
import CommentList from "@/views/CommentList.vue";
import CommentDetails from "@/views/CommentDetails.vue";
import CommentCreate from "@/views/CommentCreate.vue";
import Staff from "@/views/Staff.vue";
import ProfileDetails from "@/views/ProfileDetails.vue";
import ProfileCreate from "@/views/ProfileCreate.vue";
import ErrorDisplay from "@/views/ErrorDisplay.vue";


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
  //component: () => import("./views/Notif.vue") 
  },
  {
    path: "/profiles",
    name: "Staff",
    component: Staff
  },
  {
    path: "/profile/:id",// : => dynamic => passed in component as props)
    name: "ProfileDetails",
    props: true,
    component: ProfileDetails
  },
  { 
    path: "/profile/create",
    name: "ProfileCreate",
    component: ProfileCreate
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded//
    //component: () => import("./views/BoardUser.vue")
  },
  {
    path: "/admin",
    name: "admin",
    //component: () => import("./views/BoardAdmin.vue")
  },
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    props: true,
    component: ErrorDisplay
  } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


//meta: {requiresAuth : true}//when logout

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signin", "/accueil"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user")

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
}); 

export default router
