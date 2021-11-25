<template>
  
 <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link>|
        <router-link to="/Comments">Comments</router-link> |
        <router-link to="/Staff">Collègues</router-link>
      </div>
    <router-view/>
  </div>

  <h1> Créez votre Profile </h1>

  <div class="profile">
   <form @submit.prevent="onSubmit">

  <label>Photo</label>
    <input
      type="file"
      placeholder="Photo"
    >

    <label>Nom</label>
    <input
      v-model="profile.name"
      type="text"
      placeholder="Nom"
    >

    <label>Description</label>

   <textarea v-model="profile.description"
      placeholder="Description"></textarea>

    <button type="submit">Envoyer</button>
  </form>


  </div>

</template>


<script>

//id library
import { v4 as uuidv4 } from "uuid";

export default {
  data () {
    return {
      profile:{
        id: "", 
        name: "",
        photo: "",
        description: ""
      }
    }
  },   

  methods: {
    onSubmit() {
        const profile = {
          ...this.profile,//méthode spread 
          id: uuidv4(),
          name: this.$store.state.user
        }
        this.$store.dispatch("createProfile", profile)//add to Vuex state
        .then( () => {
          this.$router.push({//return to Staff Page on (new) created
            name: 'ProfileDetails',
            params: { id: profile.id }
          })
        })
        .catch(error => {
          this.$router.push({
            name: "ErrorDisplay",
            params: { error: error }//props
          })
        })
    }
  }
};

</script>