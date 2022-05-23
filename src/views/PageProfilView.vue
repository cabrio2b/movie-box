<template>
  <ModuleHeader />
  <ModuleBandeauUtilisateurs />
  <section id="profil-container">
    <div id="profilArea">
      <div id="profilPhoto">
        <img src="" />
        />
        <button>Changer</button>
      </div>
      <br />

      <br />
      <div id="profilFriends">
        <input type="text" />
        <button @click="addFriends">Ajouter</button>
        <h3>AMIS</h3>
        <ul></ul>
      </div>
    </div>

    <div id="actualityArea">
      <div id="actuLink">
        <h2>MON FIL D'ACTUALITE</h2>
      </div>
      <ul></ul>
    </div>
    <div id="favoriteArea">
      <div id="favoriteStyle">
        <button>Ajouter</button>
        <h2>STYLES FAVORIS</h2>
        <ul></ul>
      </div>
      <br />
      <div id="favoriteMovies">
        <button>Ajouter</button>
        <h2>MES FILMS FAVORIS</h2>
        <ul></ul>
      </div>
    </div>
  </section>
  <ModuleFooter />
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";
export default {
  components: {
    ModuleHeader,
    ModuleBandeauUtilisateurs,
    ModuleFooter,
  },
};
</script>

<style scoped>
/*------------------------ Partie profil/Amis -----------------*/

#profilPhoto {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.9;
  border-radius: 8%;
  width: 11em;
  height: 12em;
}

#profilInfo {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.9;
  border-radius: 8%;
  width: 11em;
  height: 16em;
}

#profilFriends {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.9;
  border-radius: 8%;
  width: 11em;
  height: 16em;
}

#profilArea {
  display: flex;
  flex-direction: column;
  width: 20%;
}

#profil-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

/*----------------------- Partie Fil d'actualité -----------*/

#actualityArea {
  width: 60%;
}

#actuLink {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.8;
  border-radius: 8%;
  width: 50em;
  height: 4em;
}

/*----------------------- Partie Favories ------------------*/
#favoryArea {
  width: 20%;
}

#favoriteStyle {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.9;
  border-radius: 8%;
  width: 11em;
  height: 16em;
}

#favoriteMovies {
  background-color: #c4c4c4;
  border: 2px solid #d55b5b;
  opacity: 0.9;
  border-radius: 8%;
  width: 11em;
  height: 16em;
}
</style>
