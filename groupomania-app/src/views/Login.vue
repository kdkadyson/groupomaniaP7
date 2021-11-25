<template>

<div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/Signin">Signin</router-link>
    </div>
</div>

<div class="login">

  <h1>LOGIN</h1>

  <form @submit.prevent="login"> 

    <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        name="email"
        :error="emailError"
        placeholder="Email"
      >
  
    <label for="password">Mot de Passe</label>
      <input 
        v-model="password"
        type="password" 
        name="password"
        placeholder="Mot de Passe"
      />

  <button type="submit" name="button">Login</button>
  <p> {{ Erreur }} </p>

</form>

</div>

</template>


<script>
export default{
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      })
      .then( () =>{
        this.$router.push({ name: "CommentList" })
      })
      .catch(err => {
        this.error = err.response.data.error
      })
    }
  }
}

</script>