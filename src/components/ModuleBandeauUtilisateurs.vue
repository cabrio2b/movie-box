<template>
  <div id="bandeauUtilisateursContainer">
    <div class="decoPellicule"></div>
    <div class="bandeauUtilisateurs flex">
      <div></div>
      <div class="btnsConnexion flex">
        <button @click="$router.push({ path: '/connect' })" class="btnRouge">
          connexion
        </button>
        <router-link
          :to="{ name: 'connexion', params: { showSubscription: 'true' } }"
        >
          <button class="btnGris">abonnement</button>
        </router-link>
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
  },
};
</script>

<style>
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
.utilisateurContainer {
  gap: 20px;
}
.utilisateurContainer img {
  margin-top: 7px;
  width: 50px;
}
.utilisateurContainer p {
  margin: 0 0 6px;
}
.infoUtilisateur,
.jaimeUtilisateur,
.commentUtilisateur {
  text-align: center;
}
.rechercheContainer {
  align-items: center;
  gap: 10px;
}
.rechercheContainer img {
  margin-top: -20px;
  width: 50px;
}
.rechercheContainer input {
  margin-top: -20px;
}
</style>
