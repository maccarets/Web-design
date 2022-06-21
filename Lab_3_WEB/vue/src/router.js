import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/singup",
    name: "singup",
    component: () => import("./components/Singup")
  },
  {
    path: "/",
    name: "def",
    component: () => import("./components/Home")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./components/Profile"),
  },
  {
    path: "/poll",
    name: "poll",
    component: () => import("./components/Poll"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login")
  },




  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;