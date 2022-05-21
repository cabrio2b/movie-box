<template>
  <section class="divFicheFilm">
    <!-- Passer les props de chaque composant -->
    <FilmID
      :idUniqueFilm
      :filmTitle
      :filmImage
      :filmReal
      :filmActeur
      :filmOrigine
      :filmGenre
    />
    <IsFilmFavorite />
    <!-- ^ pas de props ici -->
    <InfoSocialeFilm />
    <!-- ^ pas de props ici -->
    <FilDiscussionFilm />
    <!-- ^ pas de props ici -->
  </section>
</template>

<script>
import FilmID from "@/components/FilmID.vue";
import IsFilmFavorite from "@/components/IsFilmFavorite.vue";
import InfoSocialesFilm from "@/components/InfoSocialesFilm.vue";
import FilDiscussionFilm from "@/components/old-FilDiscussionFilm.vue";

export default {
  components: {
    FilmID,
    IsFilmFavorite,
    InfoSocialesFilm,
    FilDiscussionFilm,
  },
};
</script>

<style scoped>
/* ICI LE STYLE DE LA FICHE COMPLETE DU FILM */
</style>
