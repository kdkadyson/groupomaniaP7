<template>

  <router-link class="comment-link" :to="{name: 'CommentDetails', params: {id: comment.id} }">
    <div class="comment-card">
      <span>A {{ comment.createdAt }}</span>
        <p> {{ comment.photo }} {{ comment.name }}</p>
        <p> {{ comment.img }}</p>
        <h2> {{ comment.title }}</h2>
        <p> {{ comment.description }}</p>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: Object
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 .comment-card {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.comment-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.comment-link {
  color: #2c3e50;
  text-decoration: none;
}

</style>
