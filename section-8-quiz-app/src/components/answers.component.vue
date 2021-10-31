<template>
  <div class="answers">
    <Answer
      v-for="answer in answers"
      :key="answer.text"
      class="answer"
      :answer="answer"
      @click.prevent="selectAnswer(answer)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Answer } from "@quiz/models";
import { PropType } from "vue";
import AnswerComponent from "./answer.component.vue";

@Options({
  components: {
    Answer: AnswerComponent,
  },
  props: {
    answers: { type: Object as PropType<Answer[]> },
  },
  emits: [
    'answerSelected',
  ],
  methods: {
    selectAnswer(answer: Answer): void {
      this.$emit('answerSelected', { answer });
    }
  }
})
export default class AnswersComponent extends Vue {}
</script>
