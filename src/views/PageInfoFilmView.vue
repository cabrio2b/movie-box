<template>
  <!-- Contenaire Header -->
  <ModuleHeader />
  <section id="body">
    <!-- Contenaire Module du Bandeau des utilisateur -->
    <ModuleBandeauUtilisateurs />
  
    <!-- Contenaire Module des Infos page de films -->
        <div class="imageFilm"></div>
        
        <div class="PageInfoFilm-container">
          <h1>{{filmTitle}}</h1>
          <p>{{likes}}</p>
          <p>{{firstname}} {{lastname}}</p>
          <p>{{post}}</p>
        </div>
        <div class="newComment">
          <ModuleInfoFilm/>
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
        postId: String,
        content: String,
    },

  components: {
      ModuleHeader,
      ModuleBandeauUtilisateurs,
      ModuleInfoFilm,
      ModuleFooter,
  },

  data() {
    return {
      postId: String,
      content: String,
      comment:"",
    };
  },

  methods: {
    // async postComment() {
    //   const options = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${this.token}`,
    //     },
    //     body: JSON.stringify({
    //         postId: this.postId,
    //         content: this.content
    //     }) 
    //   };
    //   const response = await fetch(
    //     "https://social-network-api.osc-fr1.scalingo.io/moviebox/post/comment",
    //     options
    //   );
    //   const data = await response.json();
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

.imageFilm {
  background-image: url(@/assets/affiche_titanic.jpg);
  background-size: 100% auto;
  height: 100%;
}

</style>