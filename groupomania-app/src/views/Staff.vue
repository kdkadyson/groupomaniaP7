<template>

  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link>  
        <router-link to="/notif">Notification</router-link>
        <router-link to="/comments">Comments</router-link>
        
      </div>
      <router-view/>
  </div>
  
  <h1> LES COLLÈGUES</h1>

  <div class="staff">
    <ProfileCard v-for="profile in profiles" :key="profile.id" :profile="profile"/>
  </div>

</template>


<script>
// @ is an alias to /src
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "Staff",
  components: {
    ProfileCard
  },
  created() {//hook => Fetch new profile => Add to Vuex state
    this.$store
      .dispatch("fetchProfiles")
      .catch(error => {
        this.$router.push({
          name: "ErrorDisplay",
          params: { error: error }//props
        })
      })
  },
  computed: {//Reactive => return latest input when state (profiles) changes
    profiles(){
      return this.$store.state.profiles
    }
  }
}

</script>

<style scoped>

.staff {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

    
 



