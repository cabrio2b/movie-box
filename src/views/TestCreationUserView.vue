<template>
  <section id="viewTest">
    <input type="text" v-model="firstname" />
    <input type="text" v-model="lastname" />
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />

    <button @click="testUserCreation">Tester API</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstname: "testNom",
      lastname: "testPrenom",
      email: "testEmail",
      password: "testPassword",
      result: null,
      token: true,
    };
  },

  methods: {
    async testUserCreation() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: "bearer token",
        },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        }),
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/register",
        options
      );
      const data = await response.json();
      console.log(data);

      /* this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      } */
    },
  },
};
</script>
