<template>
  <section id="recupDonneesTest">
    <ModuleDisplayUserData :token="this.token" />
  </section>
</template>

<script>
import ModuleDisplayUserData from "@/components/ModuleDisplayUserData.vue";
export default {
  mounted() {
    this.token = localStorage.getItem("savedUserToken");
    console.log("Affichage du token local récupéré automatiquement :");
    console.log(this.token);
  },
  components: {
    ModuleDisplayUserData,
  },
  data() {
    return {
      result: null,
      token: "",
    };
  },
};
</script>
