# atelier29_movie-box

**_ Essai API themoviedb _**

API cinéma utilisée : https://www.themoviedb.org/
clé API : https://api.themoviedb.org/3/movie/550?api_key=a670fe06041314e9cdef071de7762ef3
Documentation : https://developers.themoviedb.org/3/movies/get-movie-details


**_ FETCH sur tous les POSTS _**

    	/!\ LES "posts" SONT LES FILMS /!\
    	-> les messages des utilisateurs sont les "comments"

posts est un tableau.
-> pour accéder aux propriétés d'un post spécifique,
situé à l'indice "index" du tableau des posts :

ID du Post posts[index].\_id
Contenu du Post posts[index].content
Like du Post posts[index].likes -> est un tableau
Titre du Post posts[index].title
ID de l'auteur posts[index].userId
Prénom de l'auteur posts[index].firstname
Nom de l'auteur posts[index].lastname
Date du Post posts[index].date
Commentaire posts[index].comments -> est un tableau

    -> les commentaires seront accessibles sous la forme d'éléments
    du tableau "comments", soit :	posts[index].comments[n]
    pour le n-ième commentaire.

## Project setup
```
npm install

```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---
