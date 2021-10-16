<template>
  <h2>List Animations</h2>

  <button type="button" @click="addNumber()">Add</button>

  <ul>
    <transition-group name="fade">
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
  name: "ListAnimations",

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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
}
.fade-enter-active {
  transition-duration: 0.20s;
  transition-timing-function: ease-out;
}
.fade-leave-active {
  position: absolute;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
}
.fade-move {
  transition: all 0.1s ease-out;
}
</style>