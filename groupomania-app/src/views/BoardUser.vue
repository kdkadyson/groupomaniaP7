<template>
  <div class="container">
    <header class="user-board">
      <h1>{{content}}</h1>
    </header>
  </div>
</template>

<script>
import UserService from "../services/UserService.js";

export default {
  name: "User",
  data() {
    return {
      content: " "
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>