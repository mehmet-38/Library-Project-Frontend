import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView";
import BookListView from "@/views/BookListView";
import RegisterView from "@/views/RegisterView";
import AdminPanel from "@/views/AdminPanel";
import UserAdd from "@/views/UserAdd";
function guardAdminRoute(to, from, next) {
  var isAdmin;
  if (localStorage.getItem("currentUserRole") == "1") isAdmin = true;
  else isAdmin = false;
  if (isAdmin) {
    next(); // allow route
  } else {
    alert("Yetkisiz islem");
    next("/"); // go to '/home';
  }
}
const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book-list",
    name: "book-list",
    component: BookListView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/admin",
    name: "admin",
    beforeEnter: guardAdminRoute,
    component: AdminPanel,
  },
  {
    path: "/admin/add-user",
    name: "add-user",
    component: UserAdd,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
