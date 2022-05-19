<template>
  <section class="divInfoSocialesFilm">
    <p>Nombre d'utilisateurs sur le fil de ce film : {{ usersOnSubject }}</p>
    <div>
      <ActiveUserHere
        v-for="element in activeUserList"
        :key=""
        :activeUserPic=""
        :activeUserID=""
      />
    </div>
    <!-- ^ ICI, UTILISER UN "v-for" AFIN D'AFFICHER LES n DERNIERS UTILISATEURS ACTIFS ICI, n À CHOISIR PAR NOUS.
    CHOISIR COMMENT APPARAISSENT LES UTILISATEURS : Photo uniquement, Pseudo uniquement,... ?-->
    <div>
      <ActiveUserHere
        v-for="element in activeFriendList"
        :key=""
        :activeUserPic=""
        :activeUserID=""
      />
      <!-- On utilise le même composant pour les amis, mais le v-for sera appliqué dans la liste des amis -->
      <a href="">...</a>
    </div>
    <!-- ^ ICI, UTILISER UN "v-for" DANS LA LISTE DES "amis" AFIN D'AFFICHER LES n AMIS ACTIFS ICI, n À CHOISIR PAR NOUS.
    CHOISIR COMMENT APPARAISSENT LES UTILISATEURS : Photo uniquement, Pseudo uniquement,... ?
    ET UN LIEN SUR "..." AFIN D'AFFICHER TOUS LES AMIS -->
  </section>
</template>

<script>
import ActiveUserHere from "@/components/ActiveUserHere.vue";

export default {
  components: {
    ActiveUserHere,
  },
  computed: {
    usersOnSubject() {},
  },
};
</script>
