<template>
  <ModuleHeader />
  <section>
    <ModuleBandeauUtilisateurs v-if="!connected" />
    <ModuleBandeauUtilisateursConnecter v-if="connected" :token="this.token" />
    <div id="ProfilPersoContainer">
      <ModuleProfilPerso
        v-for="element in pageProfilData"
        :key="element._id"
        :firstname="element.firstname"
        :lastname="element.lastname"
        :email="element.userId"
        data.firstname
      />
      <button @click="getProfilInfo">Recherche</button>
    </div>
  </section>
  <ModuleFooter />
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleBandeauUtilisateursConnecter from "@/components/ModuleBandeauUtilisateursConnecter.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";
import ModuleProfilPerso from "@/components/ModuleProfilPerso.vue";
export default {
  beforeMount() {
    this.token = localStorage.getItem("savedUserToken");
    //test de connexion à partir de la valeur du token sauvegardé
    if (this.token != null && this.token != undefined && this.token != 0) {
      //Appel du token du local storage

      console.log("Affichage du token local récupéré automatiquement :");
      console.log(this.token);
      this.connected = true;
    } else {
      this.token = undefined;
      console.log("Affichage du token local récupéré automatiquement :");
      console.log(this.token);
    }
  },

  components: {
    ModuleHeader,
    ModuleBandeauUtilisateurs,
    ModuleBandeauUtilisateursConnecter,
    ModuleFooter,
    ModuleProfilPerso,
  },
  data() {
    return {
      pageProfilData: [],
      connected: undefined,
    };
  },
  props: {
    firstname: String,
    lastname: String,
    email: String,
  },

  methods: {
    async getProfilInfo() {
      alert(this.token);
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjhiOTM4OTEzNjMyMzAwMWI2ZjU3NTgiLCJpYXQiOjE2NTMzODA1NzUsImV4cCI6MTY1MzQ2Njk3NX0.Zj48HV6yJZ-B16zY7Tn2wCQ5n6n2eh27bUFNsuzhhl0",
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/user",
        options
      );
      const data = await response.json();
      this.pageProfilData = data;
      console.log(data);
      console.log(this.pageProfilData);
    },
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
  border: 2px solid black;
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

/*----------------------- Partie Favories ------------------*/
#favoryArea {
  width: 20%;
}

#favoriteStyle {
  border: 2px solid black;
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
