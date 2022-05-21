<template>
  <section class="divFilDiscussionFilm">
    <!-- composant message, répété à partir de la liste des messages -->
    <MsgFilDiscussionFilm
      v-for="message in allMsgs"
      :key=""
      :msgFilDiscussion=""
    />
    <!-- REMPLIR ICI -->
    <button class="repondreFilBtn" @click="repondreFil">Répondre</button>
    <div v-if="affichZoneRedac" class="divZoneRedac">
      <form @submit.prevent="postMsg">
        <input type="text" class="redacMsgFil" v-model="monMsg" />
        <button class="validMsgBtn">Valider</button>
      </form>
    </div>
  </section>
</template>

<script>
import MsgFilDiscussionFilm from "@/components/MsgFilDiscussionFilm.vue";
export default {
  components: {
    MsgFilDiscussionFilm,
  },
  data() {
    return {
      affichZoneRedac: false,
      monMsg: "",
      allMsgs: [], // tous les messages
    };
  },

  methods: {
    repondreFil() {
      this.affichZoneRedac = true;
    },

    postMsg() {
      allMsgs.push(monMsg);
    },
  },
};
</script>
