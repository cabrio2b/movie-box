<template>
  <div id="connectContainer" class="flex">
    <div class="logoContainer">
      <img src="@/assets/logoMb.webp" alt="Logo MovieBox" />
    </div>
    <div v-if="!getVueModule" class="inputConnectContainer">
      <div class="connectModul flex">
        <div class="decoLeft">
          <h4>connexion</h4>
        </div>
        <div class="inputContainer">
          <img src="@/assets/logoMbRondTexte.webp" alt="" />
          <form @submit.prevent="submitConnexion">
            <input
              type="mail"
              name="eMail"
              v-model="email"
              placeholder="Votre email"
            />
            <label for="mdp" placeholder="Votre email"
              >Votre mot de passe</label
            >
            <input type="password" name="mdp" v-model="password" />
            <button class="btnRouge" type="submit">Connexion</button>
          </form>
          <a href="#"><p>mot de passe oublié</p></a>
          <hr />
          <button @click="btnAbonnement" class="btnGris" type="">
            s'abonner
          </button>
        </div>

        <div class="decoRight"></div>
      </div>
    </div>
    <ModuleAbonnement v-if="getVueModule"></ModuleAbonnement>
  </div>
</template>

<script>
import ModuleAbonnement from "@/components/ModuleAbonnement.vue";
import ModuleDisplayUserData from "@/components/ModuleDisplayUserData.vue";
export default {
  props: {
    showSubscription: String,
  },

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
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      getVueModule: this.showSubscription === "true" ?? false,
      result: null,
      token: undefined,
    };
  },

  methods: {
    // Methode de connexion utilisateur
    async submitConnexion() {
      console.log("Entrée dans method async submitConnexion");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/login",
        options
      );

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
      this.saveUserToken();

      if (this.token != undefined && this.token != null && this.token != "") {
        this.$router.push("/");
      }
    },

    saveUserToken() {
      console.log("Entrée dans la méthode saveUserToken, avec le token: ");
      console.log(this.token);
      localStorage.setItem("savedUserToken", this.token);
    },

    // Methode de basculement sur création utilisateur
    btnAbonnement() {
      this.getVueModule = true;
    },
  },

  // Enregistrement des components (modules)
  components: {
    ModuleAbonnement,
    ModuleDisplayUserData,
  },
};
</script>

<style scoped>
#connectContainer {
  margin-top: 10%;
  justify-content: center;
  gap: 15%;
}
.logoContainer {
  width: 320px;
}
.logoContainer img {
  width: 100%;
}
.inputConnectContainer {
  width: 320px;
  justify-content: space-between;
}
.inputContainer {
  text-align: center;
  padding: 0 2rem;
  margin: -93px 0 0 0;
  flex-grow: 2;
}
.inputConnectContainer img {
  width: 100%;
}
.decoLeft {
  background-color: #808080;
  width: 50px;
}
.decoLeft h4 {
  margin: 0;
  padding: 0px 10px 260% 10px;
  color: #e5e5e5;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: x-large;
}
.decoRight {
  width: 40px;
  background-color: #d30303;
}
input {
  margin-bottom: 15px;
  margin-top: 5px;
  height: 25px;
  background-color: gainsboro;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
}
form {
  margin: 50px 0 5px 0;
}
a {
  font-size: 12px;
}
.btnRouge {
  margin-top: 20px;
  margin-bottom: 12px;
}
</style>
