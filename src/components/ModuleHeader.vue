<template>
  <header>
    <div class="containerHeader">
      <a @click="clickLogo">
        <img class="logo" src="@/assets/logoMb.webp" />
      </a>
      <h1 class="textCouleurPrincipale">
        Le réseau social pour les passionnés de Cinéma !
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    retourPageListeFilms() {
      this.$router.push("/");
    },
    increment() {
      this.counter++;

      if (this.counter % 10 === 0) {
        this.$emit("dizaine-de-click", this.counter);
      }
    },
    clickLogo() {
      this.retourPageListeFilms();
      this.increment();
    },
  },
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
  color: #808080;
  -webkit-text-stroke: 0.5px white;
  text-shadow: 0 0 5px #808080;
}
.logo {
  width: 180px;
}
</style>
