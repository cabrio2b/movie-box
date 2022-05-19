import { createRouter, createWebHistory } from "vue-router";
import ConnectPageView from "@/views/ConnectPageView.vue";
import TestView from "../views/TestView.vue";
import FilActu from "@/views/FilActu.vue";
//import FicheFilmView from "../views/FicheFilmView.vue";

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

  /*   {
    path: "/fiche-film",
    name: "FicheFilm",
    component: FicheFilmView,
  }, */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
