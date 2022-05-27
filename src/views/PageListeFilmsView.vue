<template>
  <!-- Contenaire Header -->
  <ModuleHeader @dizaine-de-click="afficherAlerte" />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs v-if="!connected" />
    <ModuleBandeauUtilisateursConnecter v-if="connected" :token="this.token" />

    <div class="divTest">
      <h2>Test d'affichage directement depuis PageListeFilmsView</h2>
      <div v-for="element in filActuFilmData" :key="element._id">
        <p>{{ element.title }}</p>
        <div v-for="commentaire in element.comments" :key="commentaire">
          <p>{{ commentaire.content }}</p>
        </div>
      </div>
    </div>
    <!-- Contenaire Module des minis-fiches de film -->
    <div class="containerFilms flex">
      <!-- Module des minis-fiches de film -->
      <ModuleMiniFicheFilm
        v-for="element in filActuFilmData"
        :key="element._id"
        :filmTitle="element.title"
        :post="element.content"
        :firstname="element.firstname"
        :lastname="element.lastname"
        :likes="element.likes.length"
        :postId="element._id"
        :comments="element.comments"
        :date="element.date"
      />
    </div>
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleMiniFicheFilm from "@/components/ModuleMiniFicheFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";
import ModuleBandeauUtilisateursConnecter from "@/components/ModuleBandeauUtilisateursConnecter.vue";

export default {
  beforeMount() {
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

    // Lancement auto de la fonction d'acutalisatin du fil actu
    this.getFilActu();
  },
  components: {
    ModuleMiniFicheFilm,
    ModuleBandeauUtilisateurs,
    ModuleHeader,
    ModuleFooter,
    ModuleBandeauUtilisateursConnecter,
  },

  data() {
    return {
      arrayLikesFilm: [],
      filActuFilmData: [],
      token: "",
      connected: undefined,
    };
  },

  methods: {
    afficherAlerte() {
      alert("YEEEAAAAAH BAAAABYYY YEEEEAAAAAH");
    },
    async getFilActu() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ${this.token}",
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/posts?limit=5",
        options
      );
      const data = await response.json();
      const dataPosts = data.posts;
      this.filActuFilmData = data.posts;
      console.log("Affichage de data :");
      console.log(data);
      console.log("Affichage de data.posts :");
      console.log(dataPosts);
      console.log("Affichage de .comments :");
      console.log(dataPosts[0].comments);
    },
  },
};
</script>

<style scoped>
#body {
  margin: 0 3%;
}
.containerFilms {
  gap: 25px;
  flex-direction: initial;
  justify-content: center;
}
</style>
