<!-- => REUSABLE /FLEXIBLE INPUTS -->
<template>

 <label>{{ label }}</label>
    <input 
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $comment.target.value)"
    > <!-- EventListener for update -->

</template>


<script>

export default {
  props: {
    label: {
        type: String,
        default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}

</script>