<template>
  <div class="containerFilm">
    <div class="imageFilm">
      <h2>{{ filmTitle }}</h2>
    </div>
    <div class="containerCritique bgCouleurPrincipale">
      <div class="containerNotation">
        <p class="notation textCouleurPrincipale">{{ likes }} j'aime</p>
        <p class="note">{{ firstname }} {{ lastname }}</p>
      </div>
      <p class="critique">
        {{ post }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filmTitle: String,
    post: String,
    user: String,
    lastname: String,
    firstname: String,
    likes: Number,
  },
  data() {
    return {};
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
  },
};
</script>

<style scoped>
.containerFilm {
  border-left: 10px solid #d30303;
  height: 100%;
}
.containerFilm:hover {
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
