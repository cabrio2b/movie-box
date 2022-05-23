<template>
  <section id="recupDonneesTest">
    <button id="boutonDuToken" @click="affichToken">
      TEST : Afficher le Token de l'utilisateur connecté
    </button>
    <br />
    <button id="leBoutonKiVaBien" @click="testRecupDonnees">
      TEST : Récupérer les infos de l'utilisateur connecté.
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      result: null,
    };
  },
  props: {
    token: String,
  },
  methods: {
    affichToken() {
      console.log("Affichage du Token de l'utilisateur connecté :");
      console.log(this.token);
    },
    async testRecupDonnees() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer token",
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/user",
        options
      );
      const data = await response.json();
      console.log("Affichage des données utilisateur connecté :");
      console.log(data);
    },
  },
};
</script>
