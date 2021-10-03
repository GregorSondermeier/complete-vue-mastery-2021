const app = Vue
  .createApp({
    data: () => ({
      firstName: 'wait...',
      lastName: 'wait...',
    }),
  });

// vm = viewModel (vueModel? haha)
const vm = app.mount('#app');

setTimeout(() => {
  vm.firstName = 'Gregor';
  vm.lastName = 'Sondermeier';
}, 2000);
