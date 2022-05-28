<template>
  <div class="oneComment">
    <p>{{ comm.content }}</p>
    <p class="auteur">Posté par {{ comm.firstname }} {{ comm.lastname }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comm: Object,
  },
};
</script>

<style scoped>
.oneComment {
  background-color: #00000015;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 50px
}
.auteur {
  font-style: italic;
  text-align: right;
}
</style>
