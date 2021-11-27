<template>
  
  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link>|
        <router-link to="/Comments">Comments</router-link> |
        <router-link :to="{ name: 'Staff' }">Collègues</router-link>
      </div>

      <div class="notification">
        <h1> <strong>{{currentUser.username}}</strong>NOTIFICATION </h1>

       <!--- <p> <strong>{{currentUser.likes(on user posts)}}</strong> </p>
        <p> <strong>{{currentUser.messages(on user posts)}}</strong> </p>-->
      </div>
  

  </div>
</template>

<script>
export default {
  name: "Notif",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
};
</script>
