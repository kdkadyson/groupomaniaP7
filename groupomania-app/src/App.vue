<template>
  <img src="./assets/logos/icon-above-font.png" alt=" logo" />
  
  <button type="button" class="logoutButton" @click="logout">Logout</button>
  
  <div id="app">
    <Accueil/>
    <router-view/>
  </div>
  
  <footer>
    <p> FOOTER </p>
  </footer>

</template>


<script>
  export default{
    methods: {
        logout () {
          this.$store.dispatch('logout')
        }
      }
  }
 
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 70%;
  height: 25rem;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

h1,h2,p {
  color: #000;
}
p {
  font-size: 30px;
}

footer{
  margin-top: 80px;
}

</style>
