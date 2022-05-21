<template>
  <div>
    <div class="filActuFilms-container">
      <FilActuFilmCard
        v-for="element in filActuFilmData"
        :key="element.dt"

        :filmTitle="element.apiInfo"
        :post="element.apiInfo"
        :user="element.apiInfo"
      >
      </FilActuFilmCard>
    </div>
  </div>

</template>

<script>
//import FilActuFilmCard from "@/components/FilActuFilmCard.vue";

export default {

  components: {
      FilActuFilmCard,
  },

 data() {
    return {
      filActuFilmData: [],
    };
  },

  methods: {
    async getFilActu() {
      const response = await fetch(
        "https://api.cine.org/data"
      );

      const data = await response.json();

      this.filActuFilmData = data.list;
    },
  },

};
</script>

<style scoped>
/* mise en page */
header {
    margin-bottom: 5%;
}

body { 
    font-family: "Goudy Bookletter 1911", sans-serif;
}

#body {
    margin: 0 3%;
}

.filActuFilms, .containerComments {
    display: flex;
    gap: 25px;
}

.containerFilm {
    border-left: 10px solid #D30303;
    height: 100%;
}

.containerFilm:hover{
    border-left: 10px solid #808080;
}

.imageFilm {
    /* background-image: url(images/affiche_titanic.jpg); */
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

.user {
    flex-grow: 3;
}

.containerComments {
    padding: 10px;
    margin: 0 auto;
    text-align: center; 
}

.post::first-letter {
    font-size: 150%;
    font-weight: 600;
    color: #D30303;
}

/* coloristaion */
.textCouleurPrincipale {
    color: #D30303;
}
.bgCouleurPrincipale {
    background-color: #00000015;
}

/* responsive */
@media screen and (max-width: 420px) {

    .filActuFilms {
        flex-direction: column;
    }
    .containerFilm {
        margin-top: 7%;
    }

}   
</style>
