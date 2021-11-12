<template>

    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/Login">Login</router-link>   
    </div>
    <router-view/>

  <div class="signin">
    <h1> SIGNIN </h1>

<form @submit.prevent="signin"> 

  <label for="name">Nom:</label>
    <input
      v-model="name"
      type="text"
      name="name"
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

</form>

  </div>

</template>


<script>

export default{
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      this.$store.dispatch("signin", {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then( () =>{
        this.$router.push({ name: "CommentList" })
      })
    }
  }
}



</script>