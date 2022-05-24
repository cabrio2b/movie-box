<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs />

    <!-- Contenaire Module des Infos page de films -->
    <div class="imageFilm"></div>

    <div class="PageInfoFilm-container">
      <h1>{{ filmTitle }}</h1>
      <p>{{ likes }}</p>
      <p>{{ firstname }} {{ lastname }}</p>
      <p>{{ post }}</p>
    </div>
    <div class="newComment">
      <!-- Bouton pour afficher la zone de commentaire -->
      <button
        id="commentBtn"
        v-if="!displayCommentArea"
        @click="displayCommentArea = true"
      >
        Commenter
      </button>
      <div class="commentArea" v-if="displayCommentArea">
        <textarea
          name="txtForNewComment"
          cols="30"
          rows="10"
          placeholder="Entrez ici votre commentaire !"
          v-model="content"
        ></textarea>
        <button @click="postComment">Valider le commentaire</button>
      </div>
    </div>
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
//import ModuleInfoFilm from "@/components/ModuleInfoFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";

export default {
  beforeMount() {
    this.hideCommentArea();

    this.token = localStorage.getItem("savedUserToken");
    //test de connexion à partir de la valeur du token sauvegardé
    if (this.token != null && this.token != undefined && this.token != 0) {
      //Appel du token du local storage

      console.log("Affichage du token local récupéré automatiquement :");
      console.log(this.token);
      this.connected = true;
    } else {
      this.token = undefined;
      console.log("Affichage du token local récupéré automatiquement :");
      console.log(this.token);
    }

    console.log("Affichage de filmTitle");
    console.log(this.filmTitle);
  },

  props: {
    filmTitle: String,
    likes: Number,
    firstname: String,
    lastname: String,
    post: String,
    postId: String,
  },

  components: {
    ModuleHeader,
    ModuleBandeauUtilisateurs,
    //ModuleInfoFilm,
    ModuleFooter,
  },

  data() {
    return {
      content: "",
      displayCommentArea: false,
    };
  },

  methods: {
    hideCommentArea() {
      this.displayCommentArea = false;
    },

    async postComment() {
      console.log(
        "Entrée dans méthode postComment avec les valeurs suivante : token | postID | content"
      );

      console.log(this.token, this.postId, this.content);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          postId: this.postId,
          content: this.content,
        }),
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/post/comment",
        options
      );
      const data = await response.json();
    },
  },
};
</script>

<style scoped>
#body {
  margin: 0 3%;
}
.PageInfoFilm-container {
  gap: 25px;
  flex-direction: initial;
  justify-content: center;
}

.imageFilm {
  background-image: url(@/assets/affiche_titanic.jpg);
  background-size: 100% auto;
  height: 100%;
}
</style>
