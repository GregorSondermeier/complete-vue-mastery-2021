const app = Vue.createApp({
  data() {
    return {
      isBackgroundPurple: false,
      selectedTextColor: 'white',
      radius: 75,
      rotation: 0,
    }
  },
  computed: {
    backgroundClasses() {
      return {
        purple: this.isBackgroundPurple,
      }
    },
    circleStyle() {
      const diameter = this.radius * 2;

      return [
        { width: `${diameter}px`, height: `${diameter}px`, lineHeight: `${diameter}px` },
        { transform: `rotate(${this.rotation}deg)` }
      ]
    },
  }
});

const vm = app.mount('#app');