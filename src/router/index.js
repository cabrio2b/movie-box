import { createRouter, createWebHistory } from "vue-router";
import ConnectPageView from "@/views/ConnectPageView.vue";
import TestView from "../views/TestView.vue";
import FilActu from "@/views/FilActu.vue";
import PageProfilView from "@/views/PageProfilView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ConnectPageView,
  },

  {
    path: "/test",
    name: "test",
    component: TestView,
  },

  {
    path: "/FilActu",
    name: "filActuFilms",
    component: FilActu,
  },

  {
    path: "/PageProfilView",
    name: "PageProfil",
    component: PageProfilView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
