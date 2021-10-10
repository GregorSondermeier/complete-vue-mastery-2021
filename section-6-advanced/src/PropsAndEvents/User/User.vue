<template>
  <p>The user is {{ age }} years old.</p>

  <button type="button" @click="increaseAge(1)">Age +1</button>
  <button type="button" @click="increaseAge(3)">Age +3</button>
  <button type="button" @click="decreaseAgeFn(1)">Age -1</button>
  <button type="button" @click="decreaseAgeFn(3)">Age -3</button>
</template>

<script>
export default {
  name: "User",

  props: {
    age: {
      type: Number,
      required: true,
      validator(value) {
        return value <= 130;
      },
    },
    decreaseAgeFn: Function,
  },

  emits: {
    increaseAge: Number,
  },

  methods: {
    increaseAge(numberOfYears) {
      this.$emit('increaseAge', numberOfYears);
    },
  },
}
</script>

<style scoped lang="scss">
$green: #019340;

p {
  color: $green;
}
</style>