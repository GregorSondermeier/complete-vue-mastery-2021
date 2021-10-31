<template>
  <div class="answer">
    {{ answer.text }}
  </div>
</template>

<script lang="ts">
import { Answer } from "@/models";
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    answer: { type: Object as PropType<Answer> },
  },
})
export default class AnswerComponent extends Vue {}
</script>
