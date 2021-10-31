<template>
  <div class="progress">
    <div
      class="bar"
      :style="{
        width: `${this.progressPercentage}%`
      }"
    ></div>
    <div class="status">Question {{ questionsAnswered }} out of {{ totalNumberOfQuestions }} questions answered</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    questionsAnswered: Number,
    totalNumberOfQuestions: Number,
  },
  computed: {
    progressPercentage(): number {
      return (this.questionsAnswered / this.totalNumberOfQuestions) * 100;
    }
  },
})
export default class ProgressBarComponent extends Vue {}
</script>
