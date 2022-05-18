<template>
  <button @click="testFetch">Tester API</button>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      page: null,
      totalPages: null,
      message: "",
    };
  },

  methods: {
    async testFetch() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/post?page=0&limit=5",
        options
      );
      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
  },
};
</script>
