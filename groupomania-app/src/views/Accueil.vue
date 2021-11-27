<template>

      <div id="nav">
        <div v-if="!currentUser">
          <router-link :to="{ name: 'Login' }">Login</router-link>
          <router-link :to="{ name: 'Signin' }">Signin</router-link>
        </div>

        <div v-if="currentUser">
          <router-link :to="{ name: 'Notif' }">{{ currentUser.username }} Notif</router-link>
          <a class="nav-link" href @click.prevent="logOut">LogOut</a>
        </div>
        <router-link :to="{ name: 'CommentList' }">Comments</router-link>
        <router-link :to="{ name: 'CommentCreate' }">Create Comment</router-link>
        <router-link :to="{ name: 'Staff' }">Staff</router-link>
      </div> 

      <div>
      <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/admin" class="nav-link">Admin Board</router-link> 
      </li>

      <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
      </li>
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
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};

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