<template>
  <p>si non connecter :</p>
  <div id="bandeauUtilisateursContainer">
    <div class="decoPellicule"></div>
    <div class="bandeauUtilisateurs flex">
      <div></div>
      <div class="btnsConnexion flex">
        <button
          @click="$router.push({ path: '/connect' })"
          class="btnRouge"
        >
          connexion
        </button>
        <button
          @click="$router.push({ path: '/connect' })"
          class="btnGris"
        >
          abonnement
        </button>
      </div>
    </div>
    <div class="decoPellicule"></div>
  </div>
  <p>si connecter :</p>
  <ModuleBandeauUtilisateursConnecter />
</template>

<script>
import ModuleBandeauUtilisateursConnecter from "@/components/ModuleBandeauUtilisateursConnecter.vue";
import ModuleDisplayUserData from "@/components/ModuleDisplayUserData.vue";
export default {
  components: {
    ModuleBandeauUtilisateursConnecter,
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
