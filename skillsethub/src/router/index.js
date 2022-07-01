import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import Login from "@/views/LoginPage.vue";
import Register from "@/views/RegisterPage.vue";
import ViewProfile from "@/views/ViewProfilePage.vue";
import Popup from "@/views/PopPage.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";
import Profile from "@/views/ProfilePage.vue";
import Welcome from "@/views/WelcomePage.vue";
import Logger from "@/views/LoggerInPage.vue";
import Notification from "@/views/NotificationList.vue";
import Avatar from "@/views/AvataInput.vue"

const routes = [
  {
    path: "/search",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/notification",
    name: "notification",
    component: Notification,
  },
  {
    path:"/viewprofile",
    name:"viewprofile",
    component:ViewProfile,
  },
  {
    path:"/updateprofile",
    name:"updateprofile",
    component:UpdateProfile,
  },
  {
    path:"/pop",
    name:"popup",
    component:Popup,
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile,
  },
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/logger",
    name: "logger",
    component: Logger,
  },
  {
    path:"/avatar",
    name:"avatar",
    component:Avatar,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;