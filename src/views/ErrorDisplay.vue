<template>
  <h4>Oops! Il y a une erreur:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ["error"]
}
</script>