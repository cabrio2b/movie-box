import { createRouter, createWebHistory } from "vue-router";
import ConnectPageView from "@/views/ConnectPageView.vue";
import TestView from "../views/TestView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
