<template>
  <PageProfilInfo> firstname = "", lastname = "", age = "", </PageProfilInfo>
</template>

<script>
import PageProfilInfo from "@/components/PageProfilInfo.vue";

const ProfilInfo = {
  components: {
    PageProfilInfo,
  },
  props: {
    firstname: String,
    lastname: String,
    age: Number,
  },
};
export default ProfilInfo;
</script>
