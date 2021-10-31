<template>
  <div class="result">
    <template v-if="result">
      <div class="title">{{ result.title }}</div>
      <div class="desc">{{ result.desc }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { Result } from "@/models";
import { findResult } from "@/utils";
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    questionsAnsweredCorrectly: Number,
    results: { type: Object as PropType<Result[]> },
  },
  computed: {
    result(): Result | undefined {
      return findResult(this.results, this.questionsAnsweredCorrectly)
    }
  }
})
export default class ResultComponent extends Vue {}
</script>
