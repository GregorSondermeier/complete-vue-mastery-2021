<template>
  <div class="result">
    <template v-if="result">
      <div class="title">{{ result.title }}</div>
      <div class="desc">{{ result.desc }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PropType } from "vue";
import { Result } from "@quiz/models";

@Options({
  props: {
    questionsAnsweredCorrectly: Number,
    results: { type: Object as PropType<Result[]> },
  },
  computed: {
    result(): Result {
      return this.results.find((result: Result) =>
        result.min <= this.questionsAnsweredCorrectly && this.questionsAnsweredCorrectly <= result.max);
    }
  }
})
export default class ResultComponent extends Vue {}
</script>
