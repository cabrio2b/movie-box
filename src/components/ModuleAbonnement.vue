<template>
  <div class="inputConnectContainer">
    <div class="connectModul flex">
      <div class="decoLeft">
        <h4>abonnement</h4>
      </div>
      <div class="inputContainer">
        <img src="@/assets/logoMbRondTexte.webp" alt="" />
        <form @submit.prevent="createUtilisateur">
          <input
            type="text"
            v-model="lastname"
            placeholder="Votre nom"
            required
          />
          <input
            type="text"
            v-model="firstname"
            placeholder="Votre prénom"
            required
          />
          <input
            type="mail"
            v-model="email"
            placeholder="Votre eMail"
            required
          />
          <label for="mdp" placeholder="Votre email">Votre mot de passe</label>
          <input
            type="password"
            :class="isPasswordValid ? 'valid' : 'error'"
            id="password"
            v-model="mpdUtilisateur"
          />
          <p v-show="!isPasswordValid">
            Un mot de passe doit faire au moins 8 caractères dont une lettre
            majuscule et un chiffre
          </p>
          <div v-show="isPasswordValid">
            <input
              type="text"
              id="verifMdpUtilisateur"
              v-model="verifMpdUtilisateur"
              placeholder="Mot de passe"
            /><!-- ICI EN TEXTE ET NON EN PASSWORD -->
            <p class="indications">
              <span class="verifNo" v-show="!verifMpdUtilisateurValid"
                >Mots de passe sont différents</span
              >
              <span class="verifOk" v-show="verifMpdUtilisateurValid"
                >Mots de passe sont indentiques</span
              ><br />
            </p>
          </div>
          <hr v-show="isPasswordValid" />
          <button class="btnCreate" v-show="isPasswordValid">S'abonner</button>
        </form>
      </div>
      <div class="decoRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpdUtilisateur: "",
      verifMpdUtilisateur: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },

  computed: {
    isPasswordValid() {
      const regex = new RegExp(/(?=.*\d)(?=.*[A-Z]).{8,}/);
      return regex.test(this.mpdUtilisateur);
    },
    verifMpdUtilisateurValid() {
      return this.verifMpdUtilisateur === this.mpdUtilisateur;
    },
  },
  methods: {
    async createUtilisateur() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.verifMpdUtilisateur,
          firstname: this.firstname,
          lastname: this.lastname,
        }),
      };
      console.log(
        this.email,
        this.verifMpdUtilisateur,
        this.firstname,
        this.lastname
      );
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/register",
        options
      );
      const data = await response.json();
      // console.log(response);
    },
  },
};
</script>

<style scoped>
.verifNo {
  background: #d8d8d8;
  border: 2px solid red;
}
.verifOk {
  background: #a9fa71;
  border: 1px solid #279200;
}
.inputConnectContainer {
  width: 320px;
  justify-content: space-between;
}
.inputContainer {
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
input .valid {
  border: 1px solid green;
}
form {
  margin: 50px 0 5px 0;
}

.btnConnect {
  color: white;
  background-color: #d30303;
  margin-top: 20px;
  margin-bottom: 12px;
}
.btnCreate {
  color: #e5e5e5;
  background-color: #808080;
}

p {
  margin: -10px 10px 15px 10px;
  font-size: 12px;
  text-align: justify;
}
</style>
