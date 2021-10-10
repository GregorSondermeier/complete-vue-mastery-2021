<template>
  <p>The user is {{ age }} years old.</p>
</template>

<script>
export default {
  name: "User",

  props: {
    age: Number,
  },
}
</script>

<style scoped lang="scss">
$green: #019340;

p {
  color: $green;
}
</style>