<template>
  <h2>CSS Fade Transition</h2>

  <button type="button" @click="toggleFlag()">Toggle Flag</button>

  <transition name="fade" mode="out-in">
    <h3 v-if="flag">Hello World!</h3>
    <h3 v-else>Another hello!</h3>
  </transition>
</template>

<script>
export default {
  name: "FadeTransition",

  data() {
    return {
      flag: false,
    }
  },

  methods: {
    toggleFlag() {
      this.flag = !this.flag;
    },
  },
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
}
.fade-enter-active {
  transition-duration: 0.20s;
  transition-timing-function: ease-out;
}
.fade-leave-active {
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
}
</style>