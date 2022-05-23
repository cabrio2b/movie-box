<template>
  <div>
    <div id="bandeauUtilisateursContainer">
      <div class="decoPellicule"></div>
      <div class="bandeauUtilisateurs flex">
        <div></div>
        <div class="btnsConnexion flex">
          <button @click="$router.push({ path: '/connect' })" class="btnRouge">
            connexion
          </button>
          <button
            @click="
              $router.push({ path: '/connect', methods: 'btnAbonnement()' })
            "
            class="btnGris"
          >
            abonnement
          </button>
        </div>
      </div>
      <div class="decoPellicule"></div>
    </div>
  </div>

  <div>
    <div id="bandeauUtilisateursContainer">
      <div class="decoPellicule"></div>
      <div class="bandeauUtilisateurs flex">
        <div class="utilisateurContainer flex">
          <div class="infoUtilisateur">
            <button @click="$router.push({ path: '/Profil' })">
              <img src="@/assets/imageProfilMini2.webp" alt="" />
            </button>
            <p>bonjour {utilisateur}</p>
          </div>
          <div class="commentUtilisateur">
            <img src="@/assets/imageCommentMini.webp" alt="" />
            <p>{comment} film(s) commenté(s)</p>
          </div>
          <div class="jaimeUtilisateur">
            <img src="@/assets/imageLikeRougeMini.webp" alt="" />
            <p>{like} film(s) aimé(s)</p>
          </div>
        </div>
        <div class="rechercheContainer flex">
          <img src="@/assets/imageRechercheMini.webp" alt="" /><input
            type="text"
          />
        </div>
        <div class="btnsConnexion flex">
          <button class="btnRouge">déconnexion</button>
        </div>
      </div>
      <div class="decoPellicule"></div>
    </div>
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
