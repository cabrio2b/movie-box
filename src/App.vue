<template>
  <nav>
    <router-link to="/">Connect</router-link>
    <router-link to="/test">Test</router-link>
    <router-link to="/FilActu">Fil d'Actu</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
}
</style>
