const app = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    };
  },

  template: `
    {{message}}
  `,
});

let vm;
setTimeout(() => {
  vm = app.mount('#app');
}, 3000);