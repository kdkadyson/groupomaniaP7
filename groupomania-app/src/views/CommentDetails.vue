<template>

  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/comments">Comments</router-link> |
        <router-link to="/Notif">Notif</router-link> |
        <router-link :to="{ name: 'Staff' }">Collègues</router-link>
      </div>
  </div>

  <h1> Commentaire Posté : </h1>

  <div v-if="comment"><!-- Attend que Server Renvoi comment.h pr éviter ERR => NULL -->
    <span>{{ comment.createdAt }}</span>
    <p> {{ comment.photo }} {{ comment.name }}</p>
    <p> {{ comment.category }}</p>
    <p> {{ comment.img }}</p>
    <h2> {{ comment.title }}</h2>
    <p> {{ comment.description }}</p>
  </div>

</template>

<script>

export default {
    props:["id"],
    created() {//When =>
       this.$store.dispatch("fetchComment", this.id)//Dispatch fetchComment action + id(props)
        .catch(error => {
          this.$router.push({
              name: "ErrorDisplay",
              params: { error: error }//props
          })
        })
    },
    computed: {//Reactive => return latest input when state (comments) changes
      comment(){//Make created = to comment state 
        return this.$store.state.comment
    }
  }
};

</script>