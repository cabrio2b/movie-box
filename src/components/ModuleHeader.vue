<template>
  <header>
    <div class="containerHeader">
      <img class="logo" src="@/assets/logoMb.webp" />
      <h1 class="textCouleurPrincipale">Le blog de vos critiques de films</h1>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
header {
    margin-bottom: 3%;
}
.containerHeader {
    text-align: center;
}
.containerHeader h1 {
    margin-top: -35px;
    margin-bottom: 0px;
    color:#808080;
    -webkit-text-stroke: 0.5px white;
    text-shadow: 0 0 5px #808080;
}
.logo {
    width: 180px;
}

</style>
