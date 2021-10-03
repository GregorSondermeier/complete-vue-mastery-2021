const app = Vue.createApp({
  data() {
    return {
      isBackgroundPurple: false,
      selectedTextColor: 'white',
    }
  },
  computed: {
    backgroundClasses() {
      return {
        purple: this.isBackgroundPurple,
      }
    }
  }
});

const vm = app.mount('#app');