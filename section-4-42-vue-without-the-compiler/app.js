const appWithCompiler = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    };
  },

  template: `<p>{{message}}</p>`,
});

const appWithoutCompiler = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    };
  },

  render() {
    // h = hyperscript
    return Vue.h(
      'h1',
      this.message,
    );
  },
});

const vmWithCompiler = appWithCompiler.mount('#app-with-compiler');
const vmWithoutCompiler = appWithoutCompiler.mount('#app-without-compiler');
