const firstName = 'Gregor';
const lastName = 'Sondermeier';

Vue
  .createApp({
    data: () => ({
      firstName,
      lastName,
    }),
  })
  .mount('#app');
