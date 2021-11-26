<template>

    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/Login">Login</router-link>   
    </div>
    <router-view/>

  <div class="signin">
    <h1> SIGNIN </h1>

<form @submit.prevent="signin"> 

  <label for="username">Nom:</label>
    <input
      v-model="username"
      type="text"
      name="username"
      placeholder="Nom"
      value
    >

  <label for="email">Email:</label>
    <input
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
      value
    >
  
  <label for="password">Mot de Passe:</label>
    <input 
      v-model="password"
      name
      type="password" 
      placeholder="Mot de Passe"
      value
    />

  <button type="submit">Signin</button>
  
  <ul>
    <li v-for="(error, index) in errors" :key="index">
      {{ error }}
    </li>
  </ul>

</form>

  </div>

</template>


<script>

export default{
  data () {
    return {
      username: '',
      email: '',
      password: '',
      errors: null
    }
  },
  methods: {
    signin () {
      this.$store.dispatch("signin", {
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then( () =>{
        this.$router.push({ username: "ProfileCreate" })
      })
      .catch(err => {
        this.errors = err.response.data.errors
      })
    }
  }
}

</script>