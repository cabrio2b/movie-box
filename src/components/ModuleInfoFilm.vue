<template>
  <div class="containerFilm">
    <div class="imageFilm">
      <h2>{{ filmTitle }}</h2>
    </div>
    <div class="containerCritique bgCouleurPrincipale">
      <div class="containerNotation">
        <p class="notation textCouleurPrincipale">{{ likes }} j'aime
          <button class="btnLike" @click="addLike"/>
        </p>
        <p class="note">{{ firstname }} {{ lastname }}</p>
      </div>
      <p class="critique">{{ post }}</p>
      <input type="text" placeholder="Votre commentaire" id="comment" class="commentaire" v-model="comment"/>
      <button @click="Commenter">Envoyer</button>
      <div class="newPost">
      <p class="postComment">{{comment}}</p>
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
    lastname: String,
    firstname: String,
    likes: Number,
    postId: String,
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },

    async commenter() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`,
        },
        body: JSON.stringify({
            postId: this.postId,
            comment: this.comment,
        }) 
      };
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/moviebox/post/comment",
        options
      );
      const data = await response.json();
     
    },
    
  },
};
</script>

<style scoped>
.containerFilm {
  border-left: 10px solid #d30303;
  height: 100%;
}
.containerFilm:hover {
  border-left: 10px solid #808080;
}
.containerNotation {
  display: flex;
  gap: 25px;
}
.containerNotation p {
  margin: 0 auto;
  text-align: center;
}
.imageFilm {
  background-image: url(@/assets/affiche_titanic.jpg);
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
.containerCritique {
  padding: 10px;
}
.critique {
  font-size: 90%;
}
.critique::first-letter {
  font-size: 150%;
  font-weight: 600;
  color: #d30303;
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

/* .btnLike {
  background-image: url("@/assets/imageLikeRouge.webp");
}

.btnLike:hover {
  background-image: url("@/assets/imageLikeSurvol.webp");
} */

</style>
