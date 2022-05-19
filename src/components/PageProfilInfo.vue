<template>
  <div id="profilInfo">
    <button @click="changeMyProfil">Modifier</button>
    <h5>NOM: {{ fistname }}</h5>
    <h5>PRENOM: {{ lastname }}</h5>
    <h5>AGE: {{ age }} ans</h5>
  </div>
</template>

<script>
const PageProfilInfo = {
  props: {
    firstname: String,
    lastname: String,
    age: Number,
  },
  methods: {
    changeMyProfil() {},
  },
};

export default PageProfilInfo;
</script>
