<template>
  <section class="divFilmID">
    <!-- AJOUTER LES LIENS VERS LES PAGES REAL, ACTEUR, etc DANS LES BALISES DEJA CREEES -->
    <h3 class="classFilmTitle">
      <a href="">{{ filmTitle }}</a>
    </h3>
    <img :src="filmImage" alt="affiche" />
    <p class="classFilmReal">
      <a href="">{{ filmReal }}</a>
    </p>
    <p class="classFilmActeur">
      <a href="">{{ filmActeur }}</a>
    </p>
    <!-- ^ ICI, UTILISER UN "v-for" AFIN D'AFFICHER LES n ACTEURS PRINCIPAUX, n À CHOISIR PAR NOUS -->
    <p class="classFilmOrigine">
      <a href="">{{ filmOrigine }}</a>
    </p>
    <p class="classFilmGenre">
      <a href="">{{ filmGenre }}</a>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    idUniqueFilm: String, // IDENTIFIANT UNIQUE DU FILM (affiché ou non sur la fiche)
    filmTitle: String,
    filmImage: String,
    filmReal: String,
    filmActeur: String,
    filmOrigine: String,
    filmGenre: String,
  },
};
</script>

<style scoped>
/* CREER ICI LES STYLE DE LA FICHE ID DU FILM*/
</style>
