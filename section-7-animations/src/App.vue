<template>
  <button type="button" @click="toggleFlag()">Toggle</button>

  <transition name="fade">
    <h2 v-if="flag">Hello World!</h2>
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
  transition: opacity 0.25s linear;
}
</style>
