const app = Vue
  .createApp({
    data: () => ({
      firstName: 'Gregor',
      lastName: 'Sondermeier',
    }),
  });

app.mount('#app');
