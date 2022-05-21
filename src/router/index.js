import { createRouter, createWebHistory } from "vue-router";
import ConnectPageView from "@/views/ConnectPageView.vue";
import TestView from "../views/TestView.vue";
import FilActu from "@/views/FilActu.vue";
//import PageProfilView from "@/views/PageProfilView.vue";
//import FicheFilmView from "../views/FicheFilmView.vue";
import TestCreationUserView from "@/views/TestCreationUserView.vue";
import ListeFilmsPageView from "@/views/ListeFilmsPageView.vue";
//import RecupDonneesView from "@/views/RecupDonneesView.vue";

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
    path: "/test-crea-user",
    name: "TestCreaUser",
    component: TestCreationUserView,
  },

  {
    path: "/liste-films",
    name: "ListeFilms",
    component: ListeFilmsPageView,
  },

  /*   {
    path: "/recup",
    name: "RecupDonnees",
    componenet: RecupDonneesView,
  }, */

  /* {
    path: "/PageProfilView",
    name: "PageProfil",
    component: PageProfilView,
  }, */
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
