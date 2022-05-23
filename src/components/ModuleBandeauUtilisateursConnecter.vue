<template>
  <div id="bandeauUtilisateursContainer">
    <div class="decoPellicule"></div>
    <div class="bandeauUtilisateurs flex">
      <div class="utilisateurContainer flex">
        <div class="infoUtilisateur">
          <a @click="$router.push({ path: '/Profil' })">
            <div id="btninfoUtilisateur" class="btninfoUtilisateur"></div>
          </a>

          <p>bonjour {utilisateur}</p>
        </div>
        <div class="commentUtilisateur">
          <div id="btncommentUtilisateur" class="btncommentUtilisateur"></div>
          <p>{comment} film(s) commenté(s)</p>
        </div>
        <div class="jaimeUtilisateur">
          <div id="btnjaimeUtilisateur" class="btnjaimeUtilisateur"></div>
          <p>{like} film(s) aimé(s)</p>
        </div>
        <div class="ajoutFilm">
          <div id="btnajoutFilm" class="btnajoutFilm"></div>
          <p>ajouter un film</p>
        </div>
      </div>
      <div class="rechercheContainer flex">
        <div id="btnrecherche" class="btnrecherche"></div>
        <input type="text" placeholder="recherche film" />
      </div>
      <div class="btnsConnexion flex">
        <button class="btnRouge">déconnexion</button>
      </div>
    </div>
    <div class="decoPellicule"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.infoUtilisateur,
.jaimeUtilisateur,
.commentUtilisateur,
.rechercheContainer,
.ajoutFilm {
  position: relative;
}
.utilisateurContainer p {
  margin: 61px 0 6px;
}
#btninfoUtilisateur,
#btncommentUtilisateur,
#btnjaimeUtilisateur,
#btnrecherche,
#btnajoutFilm {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 100% auto;
  cursor: pointer;
  margin-top: 7px;
  width: 50px;
  height: 50px;
}
#btnrecherche {
  left: 100%;
}
.btninfoUtilisateur {
  background-image: url("@/assets/imageProfil.webp");
}
.btncommentUtilisateur {
  background-image: url("@/assets/imageCommentaire.webp");
}
.btninfoUtilisateur:hover {
  background-image: url("@/assets/imageProfilSurvol.webp");
}
.btncommentUtilisateur:hover {
  background-image: url("@/assets/imageCommentaireSurvol.webp");
}
.btnjaimeUtilisateur {
  background-image: url("@/assets/imageLikeRouge.webp");
}
.btnjaimeUtilisateur:hover {
  background-image: url("@/assets/imageLikeSurvol.webp");
}
.btnrecherche {
  background-image: url("@/assets/imageRecherche.webp");
}
.btnrecherche:hover {
  background-image: url("@/assets/imageRechercheSurvol.webp");
}
.btnajoutFilm {
  background-image: url("@/assets/imageFilmAjout.webp");
}
.btnajoutFilm:hover {
  background-image: url("@/assets/imageFilmAjoutSurvol.webp");
}
</style>
