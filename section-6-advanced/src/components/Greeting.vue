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

</style>