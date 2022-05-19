<template>
  <!-- Contenaire d'un film -->
  <div class="containerFilm">
    <div class="imageFilm">
      <h2>Titre du film</h2>
    </div>
    <div class="containerCritique bgCouleurPrincipale">
      <div class="containerNotation">
        <p class="notation textCouleurPrincipale">4.8/5</p>
        <p class="note">par critique 1</p>
      </div>
      <p class="critique">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi
        dignissimos ex architecto aperiam nemo repellendus magnam inventore
        incidunt, asperiores voluptate, facere officia quod ratione voluptatem
        in itaque quia temporibus.
      </p>
    </div>
  </div>
  <!--/ Contenaire d'un film -->
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.containerFilm {
    border-left: 10px solid #d30303;
    height: 100%;
}

.containerFilm:hover{
    border-left: 10px solid #808080;
}
.containerNotation {
    display: flex;
    gap: 25px;
}
.containerNotation p {
    margin: 0 auto;
    text-align: center;
}
.imageFilm {
    background-image: url(@/assets/affiche_titanic.jpg);
    background-size: 100% auto;
    height: 100%;
}
.imageFilm:active {
    filter: opacity(50%);
}
.imageFilm h2 {
    margin: 0;
    padding: 113% 0 9px 10px;
    color: white;
    font-weight: 200;
}
.containerCritique {
    padding: 10px; 
}
.critique {
    font-size: 90%;
}
.critique::first-letter {
    font-size: 150%;
    font-weight: 600;
    color: #d30303;
}
.containerNotation p {
    margin: 0 auto;
    text-align: center;
}
.notation {
    flex-grow: 1;
}
.note {
    flex-grow: 3;
}

</style>
