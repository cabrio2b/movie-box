<template>
  <div class="oneComment">
    <!--  <p>Posté par {{ firstname }} {{ lastname }} le {{ date }}</p>  -->
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comments: Object,
    //date: String,
    //firstname: String,
    //lastname: String,
    //content: String,
    index: Number,
  },
};
</script>
