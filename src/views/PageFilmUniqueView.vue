<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs v-if="!connected" />
    <ModuleBandeauUtilisateursConnecter v-if="connected" :token="this.token" />

    <!-- Contenaire Module des Infos page de films -->
    <div id="containerFilm" class="flex">
      <div class="imageFilm containerFilm">
        <h1 v-if="this.filmTitle != undefined">{{ filmTitle }}</h1>
        <h1 v-else>{{ localFilmTitle }}</h1>
      </div>
      <div class="PageInfoFilm-container">
        <p v-if="this.post != undefined">{{ post }}</p>
        <p v-else>{{ localPost }}</p>
        <p class="auteur" v-if="this.firstname != undefined && this.lastname != undefined">
          Fiche créée par : {{ firstname }} {{ lastname }}
        </p>
        <p class="auteur" v-else>Fiche créée par : {{ localFirstname }} {{ localLastname }}</p>
        <div class="like" v-if="this.likes != undefined">
          <img src="@/assets/imageLikeNumero.webp" alt="" />
          <p>
            {{ likes }}
          </p>
        </div>
        <div class="like" v-else>
          <img src="@/assets/imageLikeNumero.webp" alt="" />
          <p>
            {{ localLikes }}
          </p>
        </div>
      </div>
    </div>

    <!-- ICI UNE div QUI CONTIENDRA TOUS LES COMMENTAIRES SUR LE FILM (sous la forme d'un composant répété en v-for) -->
    <div class="allComments">
      <h3>Commentaires postés sur ce film :</h3>
      <ModuleAffichageCommentaires
        v-for="comm in allComms"
        :key="comm.id"
        :comm="comm"
      />
    </div>
    <div class="newComment">
      <!-- Bouton pour afficher la zone de commentaire -->
      <button
        class="btnRouge"
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
          v-model="commentaire"
        ></textarea><br>
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
import ModuleBandeauUtilisateursConnecter from "@/components/ModuleBandeauUtilisateursConnecter.vue";

import ModuleFooter from "@/components/ModuleFooter.vue";
import ModuleAffichageCommentaires from "@/components/ModuleAffichageCommentaires.vue";

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

    // Etape du localStorage
    if (this.filmTitle) {
      localStorage.setItem("@filmTitle", this.filmTitle);
    } else {
      this.localFilmTitle = localStorage.getItem("@filmTitle");
    }

    if (this.likes) {
      localStorage.setItem("@likes", this.likes);
    } else {
      this.localLikes = localStorage.getItem("@likes");
    }

    if (this.firstname) {
      localStorage.setItem("@firstname", this.firstname);
    } else {
      this.localFirstname = localStorage.getItem("@firstname");
    }

    if (this.lastname) {
      localStorage.setItem("@lastname", this.lastname);
    } else {
      this.localLastname = localStorage.getItem("@lastname");
    }

    if (this.post) {
      localStorage.setItem("@post", this.post);
    } else {
      this.localPost = localStorage.getItem("@post");
    }

    if (this.index) {
      localStorage.setItem("@index", this.index);
      this.indexNumber = Number(this.index);
    } else {
      this.localIndex = localStorage.getItem("@index");
      this.indexNumber = Number(this.localIndex);
    }

    console.log(
      "Affichage de filmTitle, likes, firstname, lastname, post, index :"
    );
    console.log(
      this.filmTitle,
      this.likes,
      this.firstname,
      this.lastname,
      this.post,
      this.index
    );

    console.log(
      "Affichage de localFilmTitle, localLikes, localFirstname, localLastname, localPost, indexNumber :"
    );
    console.log(
      this.localFilmTitle,
      this.localLikes,
      this.localFirstname,
      this.localLastname,
      this.localPost,
      this.locaIndex
    );

    console.log("Affichage de l'index :");
    console.log(this.index);

    // Récupération des commentaires pour ce film
    this.getAllComments();
    console.log("Affichage de allComms :");
    console.log(this.allComms);
    //this.allComms = this.comments;
  },

  props: {
    filmTitle: String,
    likes: Number,
    firstname: String,
    lastname: String,
    post: String,
    postId: String,
    comments: Array,
    date: String,
    content: Array,
    objet: Object,
    index: String,
  },

  components: {
    ModuleHeader,
    ModuleBandeauUtilisateurs,
    ModuleBandeauUtilisateursConnecter,
    ModuleFooter,
    ModuleAffichageCommentaires,
  },

  data() {
    return {
      displayCommentArea: false,
      allComms: [],
      recupFetch: [],
      testJson: undefined,
      commentaire: "",
      indexNumber: undefined,
      localFilmTitle: undefined,
      localFirstname: undefined,
      localLastname: undefined,
      localLikes: undefined,
      localPost: undefined,
      localIndex: undefined,
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

      console.log(this.token, this.postId, this.commentaire);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          postId: this.postId,
          content: this.commentaire,
        }),
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/post/comment",
        options
      );
      //const data = await response.json();
    },

    async getAllComments() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/posts",
        options
      );
      const data = await response.json();
      this.allComms = data.posts[this.indexNumber].comments;
      console.log("Affichage de allComms en fin de method :");
      console.log(this.allComms);
    },
  },
};
</script>

<style scoped>

#containerFilm {
  gap: 35px;
  flex-direction: initial;
  justify-content: center;
  align-items: flex-end;
}
.imageFilm {
  width: 20%;
  height: 300px;
  background-image: url(@/assets/affiche_titanic.jpg);
  background-size: 100% auto;
}
.imageFilm h1 {
  color: white;
  margin: 260px 0 0 14px;
}
.like img {
  width: 60px;
  margin-left: -60px;
  margin-top: -60px;
  width: 60px;
}
.like p {
  color: white;
  transform: rotate(10deg);
  margin-left: -38px;
  margin-top: -21px;
  font-weight: 600;
}
p {
  margin-left: 10px;
}
.auteur {
  font-style: italic;
  text-align: right;
}
.allComments {
margin: 50px;
}
.containerFilm {
  border-left: 10px solid #d30303;
  height: 100%;
}
.containerFilm:hover {
  border-left: 10px solid #808080;
  
}
</style>
