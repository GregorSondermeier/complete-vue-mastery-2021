<template>
  <div class="single-question">
    <div class="question">{{ question.q }}</div>
    <Answers :answers="question.answers" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Question } from "@quiz/models";
import { PropType } from "vue";
import AnswersComponent from "./answers.component.vue";

@Options({
  components: {
    Answers: AnswersComponent,
  },
  props: {
    question: { type: Object as PropType<Question> },
  },
})
export default class QuestionComponent extends Vue {
  question!: Question;
}
</script>
