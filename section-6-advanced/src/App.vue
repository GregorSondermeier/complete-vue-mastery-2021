<template>
  <h3>Hey!</h3>
  <Greeting :age="age" :message="message" />
  <User :age="age" @increaseAge="increaseAge" @decreaseAge="decreaseAge" />
</template>

<script>
import Greeting from "./components/Greeting/Greeting.vue";
import User from "./components/User/User.vue";

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
    increaseAge(numberOfYears) {
      this.age += numberOfYears;
    },

    decreaseAge(numberOfYears) {
      this.age -= numberOfYears;
    },
  }
}
</script>
