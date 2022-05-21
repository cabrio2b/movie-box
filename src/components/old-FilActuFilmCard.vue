<template>
            <!-- Contenaire generale des films -->   
            <div class="filActuFilms">
                <!-- Contenaire d'un film -->
                <div class="containerFilm">
                    <div class="imageFilm">
                        <h2>{{filmTitle}}</h2>
                        <!-- <img :src="" /> Ici Url API pour l'image du film -->
                    </div>
                    <!-- Contenaire d'un commentaire -->
                    <div class="containerComments bgCouleurPrincipale">
                        <p class ="post">{{post}}</p>
                        <p class="user">{{user}}</p> 
                    </div>
                    <div class="containerLikes">
                        <p>Likes:{{likes}}</p>
                        <button @click="addLike">Like</button>
                    </div>
                </div>
            </div>                 
</template>

<script>
export default {
  props: {
    filmTitle: String,
    post: String,
    user: String,
    
  },

 data() {
        return {
            likes: 0,
        }
    },
  methods: {
    addLike() {
      this.likes += 1;
    },
  },

};
</script>

<style scoped>
/* mise en page */
header {
    margin-bottom: 5%;
}

body { 
    font-family: "Goudy Bookletter 1911", sans-serif;
}

#body {
    margin: 0 3%;
}

.filActuFilms, .containerComments {
    display: flex;
    gap: 25px;
}

.containerFilm {
    border-left: 10px solid #D30303;
    height: 100%;
}

.containerFilm:hover{
    border-left: 10px solid #808080;
}

.imageFilm {
    /* background-image: url(images/affiche_titanic.jpg); */
    background-size: 100% auto;
    height: 100%;
}

.imageFilm:active {
    filter: opacity(50%);
}

.imageFilm h2 {
    margin: 0;
    padding: 113% 0 9px 10px;
    color: white;
    font-weight: 200;
}

.user {
    flex-grow: 3;
}

.containerComments {
    padding: 10px;
    margin: 0 auto;
    text-align: center; 
}

.post::first-letter {
    font-size: 150%;
    font-weight: 600;
    color: #D30303;
}

/* coloristaion */
.textCouleurPrincipale {
    color: #D30303;
}
.bgCouleurPrincipale {
    background-color: #00000015;
}

/* responsive */
@media screen and (max-width: 420px) {

    .filActuFilms {
        flex-direction: column;
    }
    .containerFilm {
        margin-top: 7%;
    }

}   
</style>
