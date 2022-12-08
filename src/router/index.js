import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView";
import BookListView from "@/views/BookListView";
import RegisterView from "@/views/RegisterView";
import AdminPanel from "@/views/AdminPanel";
import store from "@/store";
function guardMyroute(to, from, next) {
  var isAdmin = false;

  if (store.state.roleState.userRole == "1") isAdmin = true;
  else isAdmin = false;
  if (isAdmin) {
    //console.log(store);
    next(); // allow to enter route
  } else {
    //console.log(store.state.roleState.userRole);
    next("/login"); // go to '/login';
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
    beforeEnter: guardMyroute,
    component: AdminPanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
