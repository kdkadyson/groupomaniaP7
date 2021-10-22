<template>

  <div id="app">
      <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/Notif">Notif</router-link> |
        <router-link :to="{ name: 'CommentCreate' }">Create Comment</router-link> |
        <router-link to="/Profile">Profile</router-link> |
        <router-link to="/Staff">Staff</router-link>
      </div>
  </div>

  <h1> Derniers Commentaires Postés : </h1>

  <div class="comments">
    <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment"/>
  </div>

</template>


<script>
// @ is an alias to /src
import CommentCard from "@/components/CommentCard.vue";

export default {
  name: "CommentList",
  components: {
    CommentCard
  },
  created() {//hook => Fetch new comment => Add to Vuex state
     this.$store.dispatch("fetchComments")
      .catch(error => {
        this.$router.push({
            name: "ErrorDisplay",
            params: { error: error }//props
        })
      })
  },
  computed: {//Reactive => return latest input when state (comments) changes
    comments(){
      return this.$store.state.comments
    }
  }
}
</script>

<style scoped>

.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
