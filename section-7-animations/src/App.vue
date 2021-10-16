<template>
  <button type="button" @click="toggleFlag()">Toggle</button>

  <transition name="fade" mode="out-in">
    <h2 v-if="flag">Hello World!</h2>
    <h2 v-else>Another hello!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      flag: false,
    }
  },

  methods: {
    toggleFlag() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style>
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
