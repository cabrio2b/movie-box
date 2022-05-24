<template>
  <nav>
    <router-link to="/">| Liste des films |</router-link>
    <router-link to="/connect">| Connexion |</router-link>
    <router-link to="/test">| Test |</router-link>
    <router-link to="/page-film">| Page Film |</router-link>
    <!-- <router-link to="/FilActu">| Fil d'Actu |</router-link>-->
    <router-link to="/PageProfilView">Page Profil</router-link>
    <!-- <router-link to="/fiche-film">Fiche_Film</router-link> -->
    <!-- <router-link to="/test-crea-user">| Test Crea User |</router-link> -->
    <router-link to="/recup">| Test Récup Données |</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.token = localStorage.getItem("savedUserToken");
    console.log("Affichage du token local récupéré automatiquement :");
    console.log(this.token);
  },
};
</script>
<style>
#app {
  font-family: "Goudy Bookletter 1911", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
body {
  margin: 0;
}
a {
  color: #808080;
  text-decoration: none;
}
a :hover {
  color: #d30303;
}
button {
  border: none;
  padding: 8px 40px;
  border-radius: 5px;
}
hr {
  margin: 25px 0;
}
input {
  background-color: gainsboro;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
}

.flex {
  display: flex;
}

/* coloristaion */
.textCouleurPrincipale {
  color: #d30303;
}
.bgCouleurPrincipale {
  background-color: #00000015;
}
.btnRouge {
  color: white;
  background-color: #d30303;
}
.btnRouge:hover {
  background-color: #920202;
}
.btnGris {
  color: #e5e5e5;
  background-color: #808080;
}
.btnGris:hover {
  background-color: #aeacac;
}
</style>
