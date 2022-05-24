<template>
  <section id="profil-container">
    <div id="profilArea">
      <div id="profilPhoto">
        <img src="" />
      </div>
      <div id="profilInfo">
        <h2>PROFIL {{ lastname }} - {{ firstname }}</h2>
        <h3>NOM: {{ firstname }}</h3>
        <h3>PRENOM: {{ lastname }}</h3>
        <p>User Id: {{ email }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    firstname: String,
    lastname: String,
    email: String,
  },
};
</script>
