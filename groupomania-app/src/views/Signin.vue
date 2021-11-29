<template>

<div id="app">
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/Login">Login</router-link>   
  </div>

  <div class="signin">
    <h1> SIGNIN </h1>

    <form @submit.prevent="signin"> 
      <div v-if="!successful">

        <label for="username">Nom:</label>
          <input
            v-model="user.username"
            v-validate="'required|min:3|max:20'"
            type="text"
            name="username"
            placeholder="Nom"
          />
          <div
            v-if="submitted && errors.has('username')"
            class="alert-error"
          >{{errors.first("username")}}
          </div>

        <label for="email">Email:</label>
          <input
            v-model="user.email"
            v-validate="'required|email|max:50'"
            type="email"
            name="email"
            placeholder="Email"
          /> 
          <div
            v-if="submitted && errors.has('email')"
            class="alert-error"
          >{{errors.first("email")}}
          </div>

        <label for="password">Mot de Passe:</label>
          <input 
            v-model="user.password"
            v-validate="'required|min:6|max:40'"
            type="password" 
            name="password"
            placeholder="Mot de Passe"
          />  
          <div
            v-if="submitted && errors.has('password')"
            class="alert-error"
          >{{errors.first('password')}}
          </div>
        
        <button type="submit">Signin</button>

      </div>
    </form>

    <div
      v-if="message"
      class="alert-error"
      :class="successful ? 'alert-success' : 'alert-error'"
    >{{message}}
    </div>

  </div>
</div>

</template>


<script>
import User from "../models/user";

export default{
  name: "signin",
  data () {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  created() {
      if (this.loggedIn) {
        this.$router.push({ name: "ProfileCreate" });
      }
    },

  methods: {
    signin () {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('/api/auth/signin', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.$router.push({ name: "ProfileCreate" });
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};

</script>