<template>
  <nav>
    <router-link to="/">| Connect |</router-link>
    <router-link to="/test">| Test |</router-link>
    <router-link to="/FilActu">| Fil d'Actu |</router-link>
    <!-- <router-link to="/PageProfilView">Page Profil</router-link> -->
    <!-- <router-link to="/fiche-film">Fiche_Film</router-link> -->
    <router-link to="/test-crea-user">| Test Crea User |</router-link>
    <router-link to="/liste-films">| Liste des films |</router-link>
    <!-- <router-link to="/recup">| Test Récup Données |</router-link> -->
  </nav>
  <router-view />
</template>
<style>
#app {
  font-family: "Goudy Bookletter 1911", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

header {
  margin-bottom: 5%;
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
</style>
