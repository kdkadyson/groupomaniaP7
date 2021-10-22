<template>
  
 <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link>|
        <router-link to="/Comments">Comments</router-link> |
        <router-link to="/Staff">Staff</router-link>
      </div>
    <router-view/>
  </div>

  <div class="profile">
    <h1> VOTRE PROFILE </h1>
  </div>

</template>
