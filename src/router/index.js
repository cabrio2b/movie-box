import { createRouter, createWebHistory } from "vue-router";
import PageConnectView from "@/views/PageConnectView.vue";
import TestView from "../views/TestView.vue";
//import FilActu from "@/views/FilActu.vue";
//import PageProfilView from "@/views/PageProfilView.vue";
//import FicheFilmView from "../views/FicheFilmView.vue";
//import TestCreationUserView from "@/views/TestCreationUserView.vue";
import PageListeFilmsView from "@/views/PageListeFilmsView.vue";
//import RecupDonneesView from "@/views/RecupDonneesView.vue";
import PageInfoFilmView from "@/views/PageInfoFilmView.vue";

const routes = [
  {
    path: "/connect",
    name: "connexion",
    component: PageConnectView,
    props: true,
  },

  {
    path: "/test",
    name: "test",
    component: TestView,
  },

  /*{
    path: "/FilActu",
    name: "filActuFilms",
    component: FilActu,
  },*/

  /*{
    path: "/test-crea-user",
    name: "TestCreaUser",
    component: TestCreationUserView,
  },*/

  {
    path: "/",
    name: "accueil",
    component: PageListeFilmsView,
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
  {
    path: "/page-film",
    name: "PageFilm",
    component: PageInfoFilmView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
