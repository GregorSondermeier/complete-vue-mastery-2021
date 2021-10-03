const app = Vue.createApp({

  data() {
    return {
      people: [
        {
          id: '1',
          name: 'John',
          message: 'Hello world!'
        },
        {
          id: '2',
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          id: '3',
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },

  methods: {
    move() {
      const first = this.people.shift();
      this.people.push(first);
    }
  },

  template: `
    <button
      type="button"
      class="move"
      @click="move"
    >
      Move to Bottom
    </button>
    <div
      v-for="person in people"
      :key="person.id"
      class="card"
    >
      <h3>{{ person.name }}</h3>
      <p>{{ person.message }}</p>
      <input type="text" />
    </div>`,
});

const vm = app.mount('#app')
