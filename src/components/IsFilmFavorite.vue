<template>
  <section class="divIsFilmFavorite">
    <p>{{ favoriteState }}</p>
    <button class="favoriteFilmBtn" @click="switchFavoriteState">
      {{ favoriteFilmBtn }}
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // --------------- propriété donnant l'état (favoris ou non) du film -> tout dépend de cet état
      isFavorite: false,
    };
  },

  computed: {
    // ------------- phrase à afficher pour communiquer à l'utilisateur l'état du film à l'utilisateur, varie en fonction de l'état
    favoriteState() {
      if (this.isFavorite) {
        return "Ce film fait partie de vos films favoris.";
      } else {
        return "Ce film ne fait pas partie de vos films favoris.";
      }
    },
    // --------------- contenu du bouton qui permet d'ajouter le film aux favoris ou l'en retirer, en fonction de l'état
    favoriteFilmBtn() {
      if (this.isFavorite) {
        return "Retirer";
      } else {
        return "Ajouter";
      }
    },
  },

  methods: {
    // -------------- méthode pour faire changer l'état, au clic de l'utilisateur sur le bouton
    switchFavoriteState() {
      if (this.isFavorite) {
        this.isFavorite = false;
      } else {
        this.isFavorite = true;
      }
    },
  },
};
</script>
