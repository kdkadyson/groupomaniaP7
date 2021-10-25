<template>

  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link>  
        <router-link to="/notif">Notification</router-link>
        <router-link to="/comments">Comments</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
      <router-view/>
  </div>

  <div class="staff">
    <h1> LES COLLÈGUES</h1>
    
  </div>

</template>