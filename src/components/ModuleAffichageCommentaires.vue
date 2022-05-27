<template>
  <div class="oneComment">
    <p>Posté par {{ comm.firstname }} {{ comm.lastname }}</p>
    <p>{{ comm.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comm: Object,
  },
};
</script>
