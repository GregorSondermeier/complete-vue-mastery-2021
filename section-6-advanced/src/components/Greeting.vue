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

<style scoped lang="scss">
$red: #cc3244;

p {
  color: $red;
}
</style>