const app = Vue.createApp({
  template: `
    <gs-hello name="World" />
    <gs-hello name="Gregor" />
    <gs-hello name="John" />
  `,
});

app.component('gs-hello', {
  template: `<h1>{{message}}</h1>`,

  props: {
    name: String,
  },

  data() {
    return {
      prefix: 'Hello',
    }
  },

  computed: {
    message() {
      return `${this.prefix} ${this.name}!`;
    }
  }
});

const vm = app.mount('#app');
