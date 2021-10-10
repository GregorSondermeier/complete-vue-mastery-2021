<template>
  <p>The user is {{ age }} years old.</p>

  <button type="button" @click="increaseAge(1)">Age +</button>
  <button type="button" @click="increaseAge(3)">Age +3</button>
  <button type="button" @click="decreaseAge(1)">Age -</button>
  <button type="button" @click="decreaseAge(3)">Age -3</button>
</template>

<script>
export default {
  name: "User",

  props: {
    age: Number,
  },

  emits: {
    increaseAge: Number,
    decreaseAge: Number,
  },

  methods: {
    increaseAge(numberOfYears) {
      this.$emit('increaseAge', numberOfYears);
    },
    decreaseAge(numberOfYears) {
      this.$emit('decreaseAge', numberOfYears);
    }
  },
}
</script>

<style scoped lang="scss">
$green: #019340;

p {
  color: $green;
}
</style>