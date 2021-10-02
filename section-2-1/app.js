const createMyApp = ({firstName, lastName}) =>
  Vue
    .createApp({
      data: () => ({
        firstName,
        lastName,
      }),
    });

const app1 = createMyApp({firstName: 'Gregor', lastName: 'Sondermeier'});
const app2 = createMyApp({firstName: 'John', lastName: 'Doe'});

app1.mount('#app-1');
app2.mount('#app-2');
