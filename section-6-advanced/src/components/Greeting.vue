<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: "Greeting",

  props: {
    message: String,
  }
}
</script>

<style scoped>
p {
  color: #cc3244;
}
</style>