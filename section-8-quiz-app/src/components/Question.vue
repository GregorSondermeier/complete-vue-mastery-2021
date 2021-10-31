<template>
  <div class="single-question">
    <div class="question">{{ question.q }}</div>
    <Answers :answers="question.answers" @answerSelected="answerSelected" />
  </div>
</template>

<script lang="ts">
import { Answer, Question } from "@/models";
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import AnswersComponent from "./Answers.vue";

@Options({
  components: {
    Answers: AnswersComponent,
  },
  props: {
    question: { type: Object as PropType<Question> },
  },
  emits: [
    'questionAnswered',
  ],
  methods: {
    answerSelected({ answer }: { answer: Answer }): void {
      this.$emit('questionAnswered', { isCorrect: answer.isCorrect });
    }
  },
})
export default class QuestionComponent extends Vue {}
</script>
