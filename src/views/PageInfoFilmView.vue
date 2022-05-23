<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs />
  
    <!-- Contenaire Module des Infos page de films -->
        <div class="PageInfoFilm-container">
          <h1>{{filmTitle}}</h1>
          <p>{{likes}}</p>
          <p>{{firstname}} {{lastname}}</p>
          <p>{{post}}</p>
        </div>
    </section>
      <!-- Contenaire Footer -->
  <ModuleFooter />
  
</template>

<script>

import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleInfoFilm from "@/components/ModuleInfoFilm.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";


export default {

    props: {
        filmTitle: String,
        likes: Number, 
        firstname: String, 
        lastname: String, 
        post: String,
    },

  components: {
      ModuleHeader,
      ModuleBandeauUtilisateurs,
      ModuleInfoFilm,
      ModuleFooter,
  },


};
</script>

<style scoped>
#body {
  margin: 0 3%;
}
.PageInfoFilm-container {
  gap: 25px;
  flex-direction: initial;
  justify-content: center;
}

</style>