<template>
  <div class="answer">
    {{ answer.text }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Answer } from "@quiz/models";
import { PropType } from "vue";

@Options({
  props: {
    answer: { type: Object as PropType<Answer> },
  },
})
export default class AnswerComponent extends Vue {}
</script>
