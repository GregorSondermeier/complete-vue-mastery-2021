<template>
  <p>Hey!</p>
  <greeting :message="message" />
</template>

<script>
import Greeting from "./components/Greeting";

export default {
  name: 'App',

  components: {
    Greeting,
  },

  data() {
    return {
      message: "Hello World!",
    }
  }
}
</script>
