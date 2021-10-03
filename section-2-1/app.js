const app = Vue
  .createApp({
    data: () => ({
      firstName: 'Gregor',
      middleName: undefined,
      lastName: 'Sondermeier',
      url: 'https://google.com',
      rawUrl: '<a href="https://google.com" target="_blank">Link</a>',
      age: 32,
    }),
    methods: {
      setMiddleName(event) {
        this.middleName = event.target.value;
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
    },
    computed: {
      fullName() {
        console.log('computed.fullName()')
        return `${this.firstName} ${this.middleName || ''} ${this.lastName}`
      },
    }
  });

// vm = viewModel (vueModel? haha)
const vm = app.mount('#app');
