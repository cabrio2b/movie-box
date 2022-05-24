<template>
  <section id="profil-container">
    <div id="profilArea">
      <div id="profilPhoto">
        <img src="" />
      </div>
      <div id="profilInfo">
        <h2>PROFIL {{ lastname }} - {{ firstname }}</h2>
        <h3>NOM: {{ fistname }}</h3>
        <h3>PRENOM: {{ lastname }}</h3>
        <p>EMAIL: {{ email }}</p>
      </div>
    </div>
  </section>
</template>

<script>
const PageProfilInfo = {
  props: {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    // age: Number,
  },
  methods: {
    changeMyProfil() {},
  },
};

export default PageProfilInfo;
</script>
