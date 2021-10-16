<template>
  <h2>CSS Zoom Animation</h2>

  <button type="button" @click="toggleFlag()">Toggle Flag</button>

  <transition name="zoom" mode="out-in" type="animation" appear>
    <h3 v-if="flag">Hello World!</h3>
    <h3 v-else>Another hello!</h3>
  </transition>
</template>

<script>
export default {
  name: "ZoomAnimation",

  data() {
    return {
      flag: true,
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
h3 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.zoom-enter-active,
.zoom-leave-active {
  animation-fill-mode: forwards;
  transition-property: opacity;
}

.zoom-enter-active {
  animation-duration: 0.3s;
  animation-name: zoom-in;
  animation-timing-function: ease-out;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.zoom-leave-active {
  animation-duration: 0.2s;
  animation-name: zoom-out;
  animation-timing-function: ease-in;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>