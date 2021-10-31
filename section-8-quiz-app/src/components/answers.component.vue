<template>
  <div class="answers">
    <Answer
      v-for="answer in answers"
      :key="answer.text"
      class="answer"
      :answer="answer"
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
})
export default class AnswersComponent extends Vue {
  answers!: Answer[];
}
</script>
