# atelier MovieBox

## Essai API themoviedb

- API cinéma utilisée : https://www.themoviedb.org/
- clé API : https://api.themoviedb.org/3/movie/550?api_key=a670fe06041314e9cdef071de7762ef3
- Documentation : https://developers.themoviedb.org/3/movies/get-movie-details

## FETCH sur tous les POSTS

### /!\ LES "posts" SONT LES FILMS /!\

- les messages des utilisateurs sont les "comments"  
- "posts" est un tableau.  

pour accéder aux propriétés d'un post spécifique, situé à l'indice "index" du tableau des posts :
> posts[index].\_id > ID du Post  
> posts[index].content > Contenu du Post  
> posts[index].likes > Like du Post - est un tableau  
> posts[index].title > Titre du Post  
> posts[index].userId > ID de l'auteur  
> posts[index].firstname > Prénom de l'auteur  
> posts[index].lastname > Nom de l'auteur  
> posts[index].date > Date du Post  
> posts[index].comments > Commentaire - est un tableau  

les commentaires seront accessibles sous la forme d'éléments du tableau "comments", soit :	
> posts[index].comments[n] > pour le n-ième commentaire.

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
