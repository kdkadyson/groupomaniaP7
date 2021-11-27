<template>

<div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/Signin">Signin</router-link>
    </div>

    <div class="login">
      <h1>LOGIN</h1>

      <form @submit.prevent="login"> 
        <label for="email">Email</label>
          <input
            v-model="user.email"
            v-validate="'required'"
            type="email"
            name="email"
            placeholder="Email"
          />
          <div
            v-if="errors.has('email')"
            class="alert-error"
            role="alert"
          >email requis!
          </div>
          
      
        <label for="password">Mot de Passe</label>
          <input 
            v-model="user.password"
            v-validate="'required'"
            type="password" 
            name="password"
            placeholder="Mot de Passe"
          />
          <div
            v-if="errors.has('password')"
            class="alert-error"
            role="alert"
          >Password requis!
          </div>

        <button type="submit" name="button">Login</button>

        <div v-if="message" class="alert-error" role="alert">{{message}}</div>

      </form>
    </div>

</div>

</template>


<script>
import User from '../models/user';

export default{
  name: "login",
  data () {
    return {
      user: new User('', ''),
      message: " "
    };
  },
  //Check USER logged in status (Vuex Store)
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  //If status ok => Redirect to:
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: "CommentList" });
    }
  },
  
  methods: {
    login () {//Validate input before submitting the form
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          return;//Error message
        }
        //Dispatch Auth/login action to Vuex store
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {//If login ok => Redirect to :
              this.$router.push({ name: "CommentList" });
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};

</script>