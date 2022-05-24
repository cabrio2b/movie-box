<template>
  <!-- Contenaire Header -->
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs v-if="!connected" />
    <ModuleBandeauUtilisateursConnecter v-if="connected" :token="this.token" />
    <!-- EN-DESSOUS, LA div POUR LE FORMULAIRE DE CREATION DE FICHE FILM -->
    <div class="classFilmCreation">
      <form class="formFilmCreation" @submit.prevent="createNewFilmPost">
        <label for="inputFilmTitle">Entrez le titre du film :</label>
        <input
          name="inputFilmTitle"
          type="text"
          v-model="filmTitle"
          required
          placeholder="Le Seigneur des agneaux IV : l'oreille du tibre"
        />
        <textarea
          name="inputFilmComment"
          cols="30"
          rows="10"
          v-model="firstComment"
          required
          placeholder="Oui, c'est bien ici que vous pourrez entrer le texte qui figurera sur la fiche que vous souhaitez créer... top, non ?"
        ></textarea>
        <button>BANCO !</button>
      </form>
      <!-- EN-DESSOUS, UNE div DE TEST AFIN DE VERIFIER QUE LE CONTENU DES INPUTS APPARAIT BIEN -->

      <div>
        <p v-if="displayError">
          VEUILLEZ ENTRER UN TITRE POUR LE FILM, AINSI QU'UN COMMENTAIRE.
        </p>
        <p>filmTitle : {{ filmTitle }}</p>
        <p>firstComment : {{ firstComment }}</p>
      </div>
    </div>
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
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
  },
  components: {
    ModuleBandeauUtilisateurs,
    ModuleHeader,
    ModuleFooter,
    ModuleBandeauUtilisateursConnecter,
  },
  data() {
    return {
      result: null,
      token: undefined,
      firstComment: "",
      filmTitle: "",
      displayError: false,
    };
  },
  methods: {
    async createNewFilmPost() {
      if (this.filmTitle != "" && this.firstComment != "") {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            title: this.filmTitle,
            content: this.firstComment,
          }),
        };
        const response = await fetch(
          "https://social-network-api.osc-fr1.scalingo.io/moviebox/post",
          options
        );
        const data = await response.json();
        //this.$router.push("/"); <- ICI, IL SERAIT BIEN DE POUVOIR AUTOMATIQUEMENT REDIRIGER VERS LA PAGE DU FILM QU4ON VIENT DE CREER
      } else {
        displayError = true;
      }
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
