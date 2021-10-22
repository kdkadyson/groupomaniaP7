<!-- BASE FORM -->

<template>

<label if="label">{{ label }}</label>
    <input
        v-bind="$attrs"
        :placeholder="label"
    ><!-- input listener -->

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
  }
}
</script>