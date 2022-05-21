<template>
  <section id="recupDonneesTest">
    <button @click="testRecupDonnees">
      Test : Récupérer les infos de l'utilisateur connecté.
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      token: "",
    };
  },

  methods: {
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
      console.log(data);

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
  },
};
</script>
