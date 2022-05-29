<template>
    <p>{{idFilm}} - {{titleText}} {{releaseYear}} {{primaryImage}}</p>
</template>

<script>
export default {
    props: {
    key: String,
    idFilm:String,
    titleText: String,
    primaryImage:String,
    releaseYear: String,
    

  },
}
</script>