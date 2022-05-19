<template>
        <div class="filActuFilms">
            <!-- Contenaire generale des films -->
            <div class="containerFilms">

                <!-- Contenaire d'un film -->
                <div class="containerFilm">
                    <div class="imageFilm">
                        <h2>Titre du film</h2>
                    </div>
                    <div class="containerCritique bgCouleurPrincipale">
                        <div class="containerLikes">
                            <p>Likes:{{likes}}</p>
                            <button @click="addLike">Like</button>
                            <p class="note">par critique 1</p>
                        </div>
                        <p class="critique">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi dignissimos ex architecto aperiam nemo repellendus magnam inventore incidunt, asperiores voluptate, facere officia quod ratione voluptatem in itaque quia temporibus.</p>
                    </div>
                </div>
                <!--/ Contenaire d'un film -->
            
                <!-- Contenaire d'un film -->
                <div class="containerFilm">
                    <div class="imageFilm">
                        <h2>Titre du film</h2>
                    </div>
                    <div class="containerCritique bgCouleurPrincipale">
                        <div class="containerNotation">
                            <p class="notation textCouleurPrincipale">4.8/5</p>
                            <p class="note">par critique 1</p>
                        </div>
                        <p class="critique">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi dignissimos ex architecto aperiam nemo repellendus magnam inventore incidunt, asperiores voluptate, facere officia quod ratione voluptatem in itaque quia temporibus.</p>
                    </div>
                </div>
                <!--/ Contenaire d'un film -->
            
                <!-- Contenaire d'un film -->
                <div class="containerFilm">
                    <div class="imageFilm">
                        <h2>Titre du film</h2>
                    </div>
                    <div class="containerCritique bgCouleurPrincipale">
                        <div class="containerNotation">
                            <p class="notation textCouleurPrincipale">4.8/5</p>
                            <p class="note">par critique 1</p>
                        </div>
                        <p class="critique">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi dignissimos ex architecto aperiam nemo repellendus magnam inventore incidunt, asperiores voluptate, facere officia quod ratione voluptatem in itaque quia temporibus.</p>
                    </div>
                </div>
                <!--/ Contenaire d'un film -->

                                <!-- Contenaire d'un film -->
                <div class="containerFilm">
                    <div class="imageFilm">
                        <h2>Titre du film</h2>
                    </div>
                    <div class="containerCritique bgCouleurPrincipale">
                        <div class="containerNotation">
                            <p class="notation textCouleurPrincipale">4.8/5</p>
                            <p class="note">par critique 1</p>
                        </div>
                        <p class="critique">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi dignissimos ex architecto aperiam nemo repellendus magnam inventore incidunt, asperiores voluptate, facere officia quod ratione voluptatem in itaque quia temporibus.</p>
                    </div>
                </div>
            </div>
            <!--/ Contenaire fil d'actu general des films -->
        </div>
</template>

<script>
export default {


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

.logo {
    width: 150px;
}

.containerHeader {
    text-align: center;
}

.containerFilms, .containerNotation {
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

.containerNotation p {
    margin: 0 auto;
    text-align: center;
}

.notation {
    flex-grow: 1;
}

.note {
    flex-grow: 3;
}

.containerCritique {
    padding: 10px; 
}

.critique::first-letter {
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

    .containerFilms {
        flex-direction: column;
    }
    .containerFilm {
        margin-top: 7%;
    }

    .containerHeader h1 {
        font-size: 150%;
    }

}   
</style>