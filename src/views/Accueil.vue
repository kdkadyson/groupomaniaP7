<template>

    <div id="app">
      <div id="nav">
        <router-link :to="{ name: 'Login' }">Login</router-link> 
        <router-link :to="{ name: 'Signin' }">Signin</router-link>
        <router-link :to="{ name: 'Notif' }">Notif</router-link>
        <router-link :to="{ name: 'CommentList' }">Comments</router-link>
        <router-link :to="{ name: 'CommentCreate' }">Create Comment</router-link>
        <router-link :to="{ name: 'Profile' }">Profile</router-link>
        <router-link :to="{ name: 'Staff' }">Staff</router-link>
      </div> 
    </div>

    <div class="accueil">
    <AccueilMessage/>
    </div>

</template>

<script>
// @ is an alias to /srcz
import AccueilMessage from "@/components/AccueilMessage.vue";

export default {
  name: "Accueil",
  components: {
    AccueilMessage
  }
}

</script>


<style scoped>

img {
  width: 70%;
  height: 25rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}
#nav a {
  font-weight: bold;
  font-size: 30px;
  padding-left: 40px;
  margin-right: 30px;
  color: #000;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>