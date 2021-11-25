<template>

      <div id="nav">
        <router-link :to="{ name: 'Login' }">Login</router-link> 
        <router-link :to="{ name: 'Signin' }">Signin</router-link>
        <router-link :to="{ name: 'Notif' }">Notif</router-link>
        <router-link :to="{ name: 'CommentList' }">Comments</router-link>
        <router-link :to="{ name: 'CommentCreate' }">Create Comment</router-link>
        <router-link :to="{ name: 'Staff' }">Collègues</router-link>
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

#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
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

.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
}
.logoutButton {
  cursor: pointer;
}
button {
  margin-left: 0;
}


</style>