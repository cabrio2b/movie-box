<template>
  <section class="divMsgFilDiscussion">
    <ActiveUserHere :activeUserPic="" :activeUserID="" />
    <p class="classMsgFilDiscussion">{{ msgFilDiscussion }}</p>
    <button class="likeBtn">J'aime</button>
    <!-- ^ INTEGRER ICI L'ICONE DU "like" -->
  </section>
</template>

<script>
import ActiveUserHere from "@/components/ActiveUserHere.vue";

export default {
  components: {
    ActiveUserHere,
  },
  props: {
    msgFilDiscussion: String,
  },
};
</script>
