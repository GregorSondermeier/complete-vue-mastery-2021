<template>
  <h2>Dynamic components</h2>

  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import About from './About/About.vue';
import Home from './Home/Home.vue';

export default {
  name: "DynamicComponents",

  components: {
    About,
    Home,
  },

  data() {
    return {
      componentName: 'Home',
    };
  },
};
</script>

<style scoped>

</style>