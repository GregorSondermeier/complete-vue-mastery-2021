<template>
  <h3>Hey!</h3>
  <Greeting :age="age" :message="message" />
  <User :age="age" @increaseAge="increaseAge" :decreaseAgeFn="decreaseAge" />

  <hr />

  <AppForm>
    <template v-slot:help>
      <p>{{ helpTextRegistration }}</p>
    </template>
    <template v-slot:fields>
      <label>
        E-Mail:
        <input type="text" placeholder="E-Mail">
      </label>
      <label>
        Username:
        <input type="text" placeholder="Username">
      </label>
      <label>
        Password:
        <input type="password" placeholder="Password">
      </label>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>

  <hr />

  <AppForm>
    <template v-slot:help>
      <p>{{ helpTextContact }}</p>
    </template>
    <template v-slot:fields>
      <label>
        Name:
        <input type="text" placeholder="Name">
      </label>
      <label>
        Message:
        <input type="text" placeholder="Message">
      </label>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>

<script>
import Greeting from "./components/Greeting/Greeting.vue";
import User from "./components/User/User.vue";
import AppForm from "./components/Form/Form.vue";

export default {
  name: 'App',

  components: {
    AppForm,
    Greeting,
    User,
  },

  data() {
    return {
      age: 20,
      helpTextContact: 'Contact help text',
      helpTextRegistration: 'Registration help text',
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
  }
}
</script>
