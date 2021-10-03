const app = Vue
  .createApp({
    data: () => ({
      firstName: 'Gregor',
      lastName: 'Sondermeier',
    }),
    methods: {
      // error functions won't work because of differences in 'this' binding
      fullName() {
        return `${this.firstName} ${this.lastName.toUpperCase()}`
      }
    }
  });

// vm = viewModel (vueModel? haha)
const vm = app.mount('#app');
