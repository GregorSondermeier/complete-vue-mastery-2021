<template>
  <h2>Animate.css Library</h2>

  <button type="button" @click="addNumber()">Add</button>

  <ul>
    <transition-group
      name="fade"
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
    >
      <li
        v-for="(number, index) in numbers"
        :key="number"
        @click="removeNumber(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: "AnimateCssLibrary",

  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    }
  },

  methods: {
    addNumber() {
      const number = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);

      this.numbers.splice(index, 0, number);
    },

    removeNumber(index) {
      this.numbers.splice(index, 1);
    }
  },
}
</script>

<style scoped>
li {
  cursor: pointer;
  font-size: 22px;
}

.animate__flipOutX {
  position: absolute;
}

.animate__animated {
  animation-duration: 1.5s;
}

.fade-move {
  transition-duration: 1.5s;
  /*transition: all 1.5s ease-out;*/
}
</style>