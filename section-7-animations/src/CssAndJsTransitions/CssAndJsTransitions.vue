<template>
  <h2>CSS and JS Transitions</h2>

  <button type="button" @click="toggleFlag()">Toggle Flag</button>

  <transition
    :css="true"
    name="fade"
    mode="out-in"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <h3 v-if="flag">Hello World!</h3>
    <h3 v-else>Another hello!</h3>
  </transition>
</template>

<script>
export default {
  name: "CssAndJsTransitions",

  data() {
    return {
      flag: false,
    }
  },

  methods: {
    toggleFlag() {
      this.flag = !this.flag;
    },

    onBeforeEnter(element) {
      console.log('onBeforeEnter(element)', element);
    },
    onEnter(element) {
      console.log('onEnter(element)', element);
    },
    onAfterEnter(element) {
      console.log('onAfterEnter(element)', element);
    },
    onBeforeLeave(element) {
      console.log('onBeforeLeave(element)', element);
    },
    onLeave(element) {
      console.log('onLeave(element)', element);
    },
    onAfterLeave(element) {
      console.log('onAfterLeave(element)', element);
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
