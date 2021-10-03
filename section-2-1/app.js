const app = Vue
  .createApp({
    data: () => ({
      firstName: 'Gregor',
      lastName: 'Sondermeier',
      url: 'https://google.com',
      rawUrl: '<a href="https://google.com" target="_blank">Link</a>'
    }),
    methods: {
      // error functions won't work because of differences in 'this' binding
      getFullName() {
        return `${this.firstName} ${this.lastName.toUpperCase()}`
      }
    }
  });

// vm = viewModel (vueModel? haha)
const vm = app.mount('#app');
