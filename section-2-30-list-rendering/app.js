const app = Vue.createApp({
  data() {
    return {
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
      people: [
        { name: 'John', age: 20 },
        { name: 'Rick', age: 18 },
        { name: 'Amy', age: 33 }
      ]
    }
  },
  template: `
    <ul>
      <li v-for="(bird, idx) in birds" :class="bird" :key="bird">
        {{idx + 1}}: {{bird}}
      </li>
    </ul>

    <hr />
    
    <ul>
      <li v-for="person in people">
        <div v-for="(val, key, idx) in person">({{ idx }}) {{ key }}: {{ val }}</div>
      </li>
    </ul>
  `
});

const vm = app.mount('#app');