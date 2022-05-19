<template>
  <PageProfilInfo :firstname:"" :lastname:"" :email:"" > </PageProfilInfo>
</template>

<script>
import PageProfilInfo from "@/components/PageProfilInfo.vue";

const ProfilInfo = {
  components: {
    PageProfilInfo,
  },
  

};
export default ProfilInfo;
</script>
