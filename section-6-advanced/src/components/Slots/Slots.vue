<template>
  <h2>Slots</h2>

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
import AppForm from "./Form/Form";

export default {
  name: "Slots",

  components: {
    AppForm,
  },

  data() {
    return {
      helpTextContact: 'Contact help text',
      helpTextRegistration: 'Registration help text',
    };
  },
};
</script>