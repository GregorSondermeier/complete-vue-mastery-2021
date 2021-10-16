<template>
  <h2>JS Animation</h2>

  <button type="button" @click="toggleFlag()">Toggle Flag</button>

  <transition
    :css="false"
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
      const animation = element.animate([
        { transform: 'scale3d(0,0,0)' },
        {},
      ], {
        duration: 1000,
      });

      animation.onfinish = () => {
        done();
      };
    },
    onAfterEnter(element) {
      console.log('onAfterEnter(element)', element);
    },
    onBeforeLeave(element) {
      console.log('onBeforeLeave(element)', element);
    },
    onLeave(element, done) {
      const animation = element.animate([
        {},
        { transform: 'scale3d(0,0,0)' },
      ], {
        duration: 1000,
      });

      animation.onfinish = () => {
        done();
      };
    },
    onAfterLeave(element) {
      console.log('onAfterLeave(element)', element);
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
</style>
