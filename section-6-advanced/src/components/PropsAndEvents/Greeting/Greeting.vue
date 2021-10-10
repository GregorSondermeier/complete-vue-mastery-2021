<template>
  <p v-if="hasReachedMinimumAge">{{ message }}</p>
  <p v-else>You must be {{ minimumAge }} years or older to view this message.</p>
</template>

<script>
export default {
  name: "Greeting",

  props: {
    age: Number,
    message: String,
  },

  data() {
    return {
      minimumAge: 25,
    }
  },

  computed: {
    hasReachedMinimumAge() {
      return this.age >= this.minimumAge;
    }
  }
}
</script>

<style scoped lang="scss">
$red: #cc3244;

p {
  color: $red;
}
</style>