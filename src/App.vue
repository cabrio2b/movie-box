<template>
  <nav>
    <router-link to="/">| Connect |</router-link>
    <router-link to="/test">| Test |</router-link>
    <router-link to="/FilActu">| Fil d'Actu |</router-link>
    <!-- <router-link to="/PageProfilView">Page Profil</router-link> -->
    <!-- <router-link to="/fiche-film">Fiche_Film</router-link> -->
    <router-link to="/test-crea-user">| Test Crea User |</router-link>
    <router-link to="/recup">| Test Récup Données |</router-link>
  </nav>
  <router-view />
</template>
<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN RESET xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIN RESET xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

a {
  color: #808080;
  text-decoration: none;
}
a :hover {
  color: #d30303;
}
button {
  border: none;
  padding: 8px 40px;
  border-radius: 5px;
}
hr {
  margin: 25px 0;
}

.flex {
  display: flex;
}
</style>
