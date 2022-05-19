import { createRouter, createWebHistory } from "vue-router";
import ConnectPageView from "@/views/ConnectPageView.vue";
import TestView from "../views/TestView.vue";
import FilActu from "@/views/FilActu.vue";
<<<<<<< HEAD
import PageProfilView from "@/views/PageProfilView.vue";
=======
//import FicheFilmView from "../views/FicheFilmView.vue";
>>>>>>> 49db9fda4954e02b1723895e36764f3908028b09

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

<<<<<<< HEAD
  {
    path: "/PageProfilView",
    name: "PageProfil",
    component: PageProfilView,
  },
=======
  /*   {
    path: "/fiche-film",
    name: "FicheFilm",
    component: FicheFilmView,
  }, */
>>>>>>> 49db9fda4954e02b1723895e36764f3908028b09
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
