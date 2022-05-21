<template>
  <div id="bandeauUtilisateursContainer">
    <div class="decoPellicule"></div>
    <div class="bandeauUtilisateurs flex">
      <div></div>
      <div class="btnsConnexion flex">
        <button @click="$router.push({ path: '/connect' })" class="btnRouge">connexion</button>
        <button @click="$router.push({ path: '/connect', methods: 'btnAbonnement' })" class="btnGris">abonnement</button>
      </div>
    </div>
    <div class="decoPellicule"></div>
  </div>
</template>

<script>
import ModuleDisplayUserData from "@/components/ModuleDisplayUserData.vue";
export default {
  components: {
    ModuleDisplayUserData,
  }
};
</script>

<style scoped>
#bandeauUtilisateursContainer {
  margin-bottom: 2%;
}
.bandeauUtilisateurs {
  justify-content: space-between;
  
}
.btnsConnexion {
  gap: 20px;
  padding-bottom: 10px;
  padding-top: 45px;
}
.decoPellicule {
    height: 17px;
    background-image: url(@/assets/film-pellicule.webp);
}
</style>
