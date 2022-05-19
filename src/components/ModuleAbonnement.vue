<template>
  <div class="inputConnectContainer">
    <div class="connectModul flex">
      <div class="decoLeft">
        <h4>connexion</h4>
      </div>
      <div class="inputContainer">
        <img src="@/assets/logoMbRondTexte.webp" alt="" />
        <form @submit.prevent="submitConnexion">
          <label for="eMail">Votre identifiant</label>
          <input type="mail" name="eMail" placeholder="Votre email" />
          <label for="mdp" placeholder="Votre email">Votre mot de passe</label>
          <input type="password" name="mdp" />
          <button class="btnConnect" type="submit">Connexion</button>
        </form>
        <a href="#"><p>mot de passe oublié</p></a>
        <hr />
        <button class="btnCreate" type="">s'abonner</button>
      </div>
      <div class="decoRight"></div>
    </div>
  </div>
</template>

<script>
export default {}
 
</script>

<style scoped>
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
form {
  margin: 50px 0 5px 0;
}

.btnConnect {
  color: white;
  background-color: #d30303;
  margin-top:20px;
  margin-bottom: 12px;
}
.btnCreate {
  color: #e5e5e5;
  background-color: #808080;
}

a {
  font-size: 12px;
}
</style>
