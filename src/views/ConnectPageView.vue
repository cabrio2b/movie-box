<template>
  <div id="connectContainer" class="flex">
    <div class="logoContainer">
      <img src="@/assets/logoMb.webp" alt="Logo MovieBox" />
    </div>
    <ModuleConnexion v-if="!vueModule"></ModuleConnexion>
    <ModuleAbonnement v-if="vueModule"></ModuleAbonnement>
  </div>
</template>

<script>
import ModuleConnexion from '@/components/ModuleConnexion.vue'
import ModuleAbonnement from '@/components/ModuleAbonnement.vue'
export default {
  data() {
    return {
      changeModule: false,
    }
  },
  components: {
    ModuleConnexion,
    ModuleAbonnement
  }
};
</script>

<style scoped>
#connectContainer {
  margin-top: 10%;
  justify-content: center;
  gap: 15%;
}
.logoContainer {
  width: 320px;
}
.logoContainer img {
  width: 100%;
}

</style>