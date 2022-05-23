<template>
    <div id="bandeauUtilisateursContainer">
    <div class="decoPellicule"></div>
    <div class="bandeauUtilisateurs flex">
      <div class="utilisateurContainer flex">
        <div class="infoUtilisateur">
          <img src="@/assets/imageProfilMini2.webp" alt="" />
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
          placeholder="recherche film"
        />
      </div>
      <div class="btnsConnexion flex">
        <button class="btnRouge">déconnexion</button>
      </div>
    </div>
    <div class="decoPellicule"></div>
  </div>
  
</template>

<script>

export default {
    
}
</script>