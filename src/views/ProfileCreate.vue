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
    <h1> Créez votre Profile </h1>

   <form @submit.prevent="onSubmit">

  <label>Photo</label>
    <input
      v-model="profile.photo"
      type="text"
      placeholder="Photo"
    >

    <label>Nom</label>
    <input
      v-model="profile.name"
      type="text"
      placeholder="Nom"
    >

    <label>Description</label>
    <input
      v-model="profile.description"
      type="text"
      placeholder="Description"
    />

    <button type="submit">Envoyer</button>
  </form>


  </div>

</template>