<template>
  <section id="viewTest">
    <button @click="testFetch">Tester API</button>
    <div>
      <p v-for="element in test" :key="element.id">{{ element.content }}</p>
    </div>
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
      test: [],
    };
  },
  props: {
    indexFiche: String,
    indexCommentaire: String,
  },

  methods: {
    async testFetch() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //Authorization: "bearer token",
        },
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/posts",
        options
      );
      const data = await response.json();
      console.log(data.posts[0].comments);
      this.test = data.posts[0].comments;
    },
  },
};
</script>
