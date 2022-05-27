import { createRouter, createWebHistory } from "vue-router";
import PageConnectView from "@/views/PageConnectView.vue";
import TestView from "../views/TestView.vue";
//import FilActu from "@/views/FilActu.vue";
import PageProfilView from "@/views/PageProfilView.vue";
//import FicheFilmView from "../views/FicheFilmView.vue";
//import TestCreationUserView from "@/views/TestCreationUserView.vue";
import PageListeFilmsView from "@/views/PageListeFilmsView.vue";
import PageRecupDonneesView from "@/views/PageRecupDonneesView.vue";
import PageInfoFilmView from "@/views/PageInfoFilmView.vue";
import PageNewFilmView from "@/views/PageNewFilmView.vue";
import PageFilmUniqueView from "@/views/PageFilmUniqueView.vue";

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
    props: true,
  },

  {
    path: "/recup",
    name: "recupDonnees",
    component: PageRecupDonneesView,
  },

  {
    path: "/profil",
    name: "pageProfil",
    component: PageProfilView,
  },
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

  {
    path: "/le-film",
    name: "LeFilm",
    component: PageFilmUniqueView,
    props: true,
  },

  {
    path: "/AddFilm",
    name: "AddFilm",
    component: PageNewFilmView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
