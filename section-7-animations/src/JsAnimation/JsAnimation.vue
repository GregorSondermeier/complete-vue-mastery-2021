<template>
  <h2>JS Animation</h2>

  <button type="button" @click="toggleFlag()">Toggle Flag</button>

  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <h3 v-if="flag">Hello World!</h3>
  </transition>
</template>

<script>
export default {
  name: "JsAnimation",

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
    onEnter(element, done) {
      console.log('onEnter(element, done)', element);
      done();
    },
    onAfterEnter(element) {
      console.log('onAfterEnter(element)', element);
    },
    onBeforeLeave(element) {
        console.log('onBeforeLeave(element)', element);
    },
    onLeave(element, done) {
        console.log('onLeave(element, done)', element);
      done();
    },
    onAfterLeave(element) {
        console.log('onAfterLeave(element)', element);
    }
  },
}
</script>