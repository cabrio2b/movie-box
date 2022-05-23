<template>
  <section id="recupDonneesTest">
    <p>INFOS DE L'UTILISATEUR</p>
    <p>Prénom : {{ firstname }}</p>
    <p>Nom : {{ lastname }}</p>
    <p>email : {{ email }}</p>
    <button id="boutonOufKiAfficheIdentifiant" @click="follyyUltimateV">
      Afficher l'identifiant de l'utilisateur
    </button>
  </section>
</template>

<script>
export default {
  updated() {
    this.testRecupDonnees();
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      identifiant: "",
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
          Authorization: `Bearer ${this.token}`,
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/user",
        options
      );

      const data = await response.json();
      console.log("Affichage des données utilisateur connecté :");
      console.log(data);

      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.identifiant = data._id;
    },

    follyyUltimateV() {
      console.log(this.identifiant);
    },
  },
};
</script>
