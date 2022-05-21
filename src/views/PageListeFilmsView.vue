<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs />

    <!-- Contenaire Module des minis-fiches de film -->
    <div class="containerFilms flex">
      <!-- Module des minis-fiches de film -->
      <ModuleMiniFicheFilm
        v-for="element in filActuFilmData"
        :key="element._id"
        :filmTitle="element.title"
        :post="element.content"
        :firstname="element.firstname"
        :lastname="element.lastname"
        :likes="element.likes.length"
      />
    </div>
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />
</template>

<script>
//getFilActu();
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleMiniFicheFilm from "@/components/ModuleMiniFicheFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";

export default {
  mounted() {
    this.getFilActu();
  },
  components: {
    ModuleMiniFicheFilm,
    ModuleBandeauUtilisateurs,
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
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/posts?limit=5",
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
  gap: 25px;
  flex-direction: initial;
  justify-content: center;
}

</style>
