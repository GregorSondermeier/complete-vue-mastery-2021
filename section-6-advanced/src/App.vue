<template>
  <h3>Hey!</h3>
  <Greeting :message="message" />
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
  }
}
</script>
