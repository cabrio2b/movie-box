<template>
  <div id="profilInfo">
    <PageProfilInfo
      v-for="element in profilData"
      :firstname="posts[index].firstname"
      :lastname="posts[index].lastname"
      :email=""
    >
    </PageProfilInfo>
  </div>
</template>

<script>
import PageProfilInfo from "@/components/PageProfilInfo.vue"
export default {
    components: {
        PageProfilInfo,
    },
    data () {
        return {
            profilData: [],
        }
    },
    methods: {
     async   const options = {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
email: email,
password: password
})
},
const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/moviebox", options);
const data = await response.json();
    }

}
</script>
