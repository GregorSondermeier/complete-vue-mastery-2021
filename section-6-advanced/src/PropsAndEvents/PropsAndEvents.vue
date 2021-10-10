<template>
  <h2>Props & Events</h2>
  <Greeting :age="age" :message="message" />
  <User :age="age" @increaseAge="increaseAge" :decreaseAgeFn="decreaseAge" />
</template>

<script>
import Greeting from "./Greeting/Greeting";
import User from "./User/User";

export default {
  name: "PropsAndEvents",

  components: {
    Greeting,
    User,
  },

  data() {
    return {
      age: 20,
      message: "Hello World!",
    }
  },

  methods: {
    increaseAge(numberOfYears) {
      this.age += numberOfYears;
    },

    decreaseAge(numberOfYears) {
      this.age -= numberOfYears;
    },
  },
};
</script>