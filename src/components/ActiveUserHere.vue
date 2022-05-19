<template>
  <section class="divActiveUserHere">
    <!-- Miniature de l'avatar de l'utilisateur -->
    <img :src="activeUserPic" alt="i" />

    <p>
      <!-- Pseudo de l'utilisateur, avec un lien (A AJOUTER ICI) -->
      <a href="">{{ activeUserID }}</a>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    activeUserID: String,
    activeUserPic: String,
  },
};
</script>
