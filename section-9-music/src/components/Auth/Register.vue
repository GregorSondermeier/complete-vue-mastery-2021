<template>
  <div
    v-if="isAlertShowing"
    class="text-white text-center font-bold p-5 mb-4"
    :class="alertVariant"
  >
    {{ alertMessage }}
  </div>
  <VeeForm
    :validation-schema="validationSchema"
    @submit="register"
    :initial-values="initialValues"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <VeeField
        type="text"
        name="name"
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
        placeholder="Enter Name"
      />
      <VeeErrorMessage name="name" class="text-red-600" />
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <VeeField
        type="number"
        name="age"
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
      />
      <VeeErrorMessage name="age" class="text-red-600" />
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
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <VeeField
        type="password"
        name="confirmPassword"
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
        placeholder="Confirm Password"
      />
      <VeeErrorMessage name="confirmPassword" class="text-red-600" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <VeeField
        as="select"
        name="country"
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
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="NotAllowedCountry">Not Allowed Country</option>
      </VeeField>
      <VeeErrorMessage name="country" class="text-red-600" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <div class="block">
        <VeeField
          type="checkbox"
          name="acceptTermsOfService"
          :value="true"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <label class="inline-block">Accept terms of service</label>
      </div>
      <VeeErrorMessage name="acceptTermsOfService" class="text-red-600" />
    </div>
    <!-- Submit Button -->
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
  name: 'Register',
  data() {
    return {
      validationSchema: {
        name: 'required|min:3|max:100|alphaSpaces',
        email: 'required|min:5|max:100|email',
        age: 'required|minValue:18|maxValue:100',
        password: 'required|min:8|max:32',
        confirmPassword: 'passwordsMustMatch:@password',
        country: 'required|notOneOfTheseCountries:NotAllowedCountry',
        acceptTermsOfService: 'acceptTermsOfService',
      },
      initialValues: {
        country: 'Germany',
      },
      isLoading: false,
      isAlertShowing: false,
      alertVariant: 'bg-blue-500',
      alertMessage: 'Please wait. Your account is being generated.',
    };
  },
  methods: {
    register(values) {
      console.log('values:', values);
      this.isAlertShowing = true;
      this.isLoading = true;
      this.alertVariant = 'bg-blue-500';
      this.alertMessage = 'Please wait. Your account is being generated.';

      setTimeout(() => {
        if (Math.random() > 0.5) {
          this.alertVariant = 'bg-green-500';
          this.alertMessage = 'Success! Your account has been created.';
        } else {
          this.alertVariant = 'bg-red-500';
          this.alertMessage = 'Error! User already exists.';
        }
      }, 1000);
    },
  },
};
</script>
