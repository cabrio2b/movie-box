<template>
  <section>
    <ModuleHeader />
    <ModuleBandeauUtilisateurs v-if="!connected" />
    <ModuleBandeauUtilisateursConnecter v-if="connected" :token="this.token" />
    <button @click="getProfilInfo">Recherche</button>
    <ModuleProfilPerso
      v-for="element in pageProfilData"
      :key="element._id"
      :firstname="element.firstname"
      :lastname="element.lastname"
      :email="element.email"
    />
    <ModuleFooter />
  </section>
</template>

<script>
import ModuleHeader from "@/components/ModuleHeader.vue";
import ModuleBandeauUtilisateurs from "@/components/ModuleBandeauUtilisateurs.vue";
import ModuleBandeauUtilisateursConnecter from "@/components/ModuleBandeauUtilisateursConnecter.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";
import ModuleProfilPerso from "@/components/ModuleProfilPerso.vue";
export default {
  components: {
    ModuleHeader,
    ModuleBandeauUtilisateurs,
    ModuleBandeauUtilisateursConnecter,
    ModuleFooter,
    ModuleProfilPerso,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      pageProfilData: [],
      connected: undefined,
    };
  },

  methods: {
    async getProfilInfo() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer token",
        },
        Body: {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/user",
        options
      );
      const data = await response.json();
      this.pageProfilData = data.user;
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
