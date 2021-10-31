<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar"></div>
      <div class="status">1 out of 3 questions answered</div>
    </div>
    <Question
      v-for="question in questions"
      :key="question.q"
      :question="question"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Question } from "@quiz/models";
import { PropType } from "vue";
import QuestionComponent from "./question.component.vue";

@Options({
  components: {
    Question: QuestionComponent
  },
  props: {
    questions: { type: Object as PropType<Question[]> },
  },
})
export default class QuestionsComponent extends Vue {
  questions!: Question[];
}
</script>
