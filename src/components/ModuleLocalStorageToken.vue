<template>
  <button id="sauvegarderLeTokenEnLocalEnCamelCase" @click="saveUserToken">
    TEST : Sauvegarder le Token en local
  </button>
  <br />
  <button id="leFameuxBoutonDuTokenLocal" @click="showLocalSavedToken">
    TEST : Voir le Token du Local Storage
  </button>
</template>

<script>
export default {
  props: {
    token: String,
  },
  methods: {
    saveUserToken() {
      console.log("entrée dans la méthode saveUserToken, avec le token: ");
      console.log(this.token);
      localStorage.setItem("savedUserToken", JSON.stringify(this.token));
    },

    showLocalSavedToken() {
      let lsParsed = localStorage.getItem("savedUserToken");
      console.log("Affichage du token sauvegardé en local storage :");
      console.log(lsParsed);
      alert(lsParsed);
    },
  },
};
</script>
