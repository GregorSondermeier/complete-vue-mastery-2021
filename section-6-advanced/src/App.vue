<template>
  <h3>Hey!</h3>

  <button type="button" @click="increaseAge()">Age +</button>
  <button type="button" @click="decreaseAge()">Age -</button>

  <Greeting :age="age" :message="message" />
  <User :age="age"/>
</template>

<script>
import Greeting from "./components/Greeting/Greeting.vue";
import User from "./components/User/User";

export default {
  name: 'App',

  components: {
    Greeting,
    User,
  },

  data() {
    return {
      message: "Hello World!",
      age: 20,
    }
  },

  methods: {
    increaseAge() {
      this.age++;
    },

    decreaseAge() {
      this.age--;
    },
  }
}
</script>
