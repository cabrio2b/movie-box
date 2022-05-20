<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire generale des films -->
    <div class="containerFilms">
      <!-- Contenaire d'un film -->
      <ModuleFicheFilm
        v-for="element in filActuFilmData"
        :key="element._id"
        :filmTitle="element.title"
        :post="element.content"
        :firstname="element.firstname"
        :lastname="element.lastname"
        :likes="element.likes.length"
      />
      <!--<button @click="getFilActu">click me</button> -->
      <!--/ Contenaire d'un film -->
    </div>
    <!--/ Contenaire generale des films -->
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />
</template>

<script>
//getFilActu();
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleFicheFilm from "@/components/ModuleFicheFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";

export default {
  mounted() {
    this.getFilActu();
  },
  components: {
    ModuleFicheFilm,
    ModuleHeader,
    ModuleFooter,
  },

  data() {
    return {
      arrayLikesFilm: [],
      filActuFilmData: [],
    };
  },

  methods: {
    async getFilActu() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //Authorization: "bearer token",
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/posts?limit=4",
        options
      );
      const data = await response.json();
      this.filActuFilmData = data.posts;
      console.log(data);
      console.log(this.filActuFilmData);
    },
  },
};
</script>

<style scoped>
#body {
  margin: 0 3%;
}
.containerFilms {
  display: flex;
  gap: 25px;
}
</style>
