const app = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    };
  },

  beforeCreate() {
    console.log('beforeCreate():', this.message, this.$el);
  },
  created() {
    console.log('created()', this.message, this.$el);
  },
  beforeMount() {
    console.log('beforeMount()', this.message, this.$el);
  },
  mounted() {
    console.log('mounted()', this.message, this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate()', this.message, this.$el);
  },
  updated() {
    console.log('updated()', this.message, this.$el);
  },
  beforeUnmount() {
    console.log('beforeUnmount()', this.message, this.$el);
  },
  unmounted() {
    console.log('unmounted()', this.message, this.$el);
  },

  template: `
    <p>{{message}}</p>
  `,
});

let vm;
setTimeout(() => {
  vm = app.mount('#app');
}, 1000);

setTimeout(() => {
  app.unmount();
}, 6000);