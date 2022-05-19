<template>
  <section id="viewTest">
    <button @click="testFetch">Tester API</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      page: null,
      totalPages: null,
      message: "",
      result: null,
      token: true,
    };
  },

  methods: {
    async testFetch() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //Authorization: "bearer token",
        },
        /*        body: JSON.stringify({
          posts: [],
          page: Number,
          totalPages: Number,
          message: String,

          page: Number,
          limit: Number,
        }), */
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/user",
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
