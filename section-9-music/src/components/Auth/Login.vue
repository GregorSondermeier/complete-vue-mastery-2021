<template>
  <div
    v-if="isAlertShowing"
    class="text-white text-center font-bold p-5 mb-4"
    :class="alertVariant"
  >
    {{ alertMessage }}
  </div>
  <VeeForm :validation-schema="validationSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        type="email"
        name="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Enter Email"
      />
      <VeeErrorMessage name="email" class="text-red-600" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField :bails="false" v-slot="{ field, errors }" name="password">
        <input
          type="password"
          v-bind="field"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Password"
        />
        <div v-for="error in errors" :key="error" class="text-red-600">
          {{ error }}
        </div>
      </VeeField>
    </div>
    <button
      type="submit"
      :disabled="isLoading"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      validationSchema: {
        email: 'required|min:5|max:100|email',
        password: 'required|min:8|max:32',
      },
      isLoading: false,
      isAlertShowing: false,
      alertVariant: 'bg-blue-500',
      alertMessage: 'Please wait. Your account is being generated.',
    };
  },
  methods: {
    login(values) {
      console.log('values:', values);
      this.isAlertShowing = true;
      this.isLoading = true;
      this.alertVariant = 'bg-blue-500';
      this.alertMessage = 'Please wait. You are being logged in.';

      setTimeout(() => {
        if (Math.random() > 0.5) {
          this.alertVariant = 'bg-green-500';
          this.alertMessage = 'Success! You are now logged in.';
        } else {
          this.alertVariant = 'bg-red-500';
          this.alertMessage = 'Error! Wrong credentials?';
        }
      }, 1000);
    },
  },
};
</script>
