<template></template>

<script>
export default {
  data() {
    return {
      localSavedToken: undefined,
    };
  },
  methods: {
    showLocalSavedToken() {
      let lsParsed = localStorage.getItem("savedUserToken");
      console.log("Affichage du token sauvegardé en local storage :");
      console.log(lsParsed);
      alert(lsParsed);

      if (lsParsed != undefined) {
        this.localSavedToken = lsParsed;
        this.$emit("get-saved-token", this.localSavedToken);
      }
    },
  },
  mounted() {
    showLocalSavedToken();
  },
};
</script>
