<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire generale des films -->
    <div class="containerFilms">
      <!-- Contenaire d'un film -->
      <ModuleFicheFilm />
      <ModuleFicheFilm />
      <ModuleFicheFilm />
      <ModuleFicheFilm />
      <!--/ Contenaire d'un film -->
    </div>
    <!--/ Contenaire generale des films -->
  </section>
  <!-- Contenaire Footer -->
  <ModuleFooter />

</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleFicheFilm from "@/components/ModuleFicheFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";

export default {
  components: {
    ModuleFicheFilm,
    ModuleHeader,
    ModuleFooter,
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
