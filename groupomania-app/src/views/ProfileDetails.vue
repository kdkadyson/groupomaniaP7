<template>

  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/comments">Comments</router-link> |
        <router-link to="/Notif">Notif</router-link> |
        <router-link to="/Staff">Collègues</router-link>
      </div>
  </div>

  <h1> Profile Posté : </h1>

  <div v-if="profile"><!-- Attend que Server Renvoi profile.h pr éviter ERR => NULL -->
    <p> {{profile.photo}} {{ profile.name }}</p>
    <p> {{profile.description}}</p>
  </div>

</template>

<script>

export default {
    props:["id"],
    created() {//When =>
      this.$store.dispatch("fetchProfile", this.id)//Dispatch fetchProfile action + id(props)
        .catch(error => {
          this.$router.push({
            name: "ErrorDisplay",
            params: { error: error }//props
          })
        })
    },
    computed: {//Reactive => return latest input when state (profiles) changes
      profile(){//Make created = to profile state 
        return this.$store.state.profile
    }
  }
};

</script>