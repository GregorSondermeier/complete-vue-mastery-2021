const app = Vue
  .createApp({
    data: () => ({
      firstName: 'Gregor',
      lastName: 'Sondermeier',
      url: 'https://google.com',
      rawUrl: '<a href="https://google.com" target="_blank">Link</a>',
      age: 32,
    }),
    methods: {
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      },
      setLastName(event) {
        this.lastName = event.target.value;
      },
      incrementAge() {
        this.age++;
      },
      decrementAge() {
        this.age--;
      },
    }
  });

// vm = viewModel (vueModel? haha)
const vm = app.mount('#app');
