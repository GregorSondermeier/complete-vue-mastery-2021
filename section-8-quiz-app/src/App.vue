<template>
  <div class="ctr" v-if="isLoaded">
    <ProgressBar :questions-answered="questionsAnswered" :total-number-of-questions="totalNumberOfQuestions" />
    <template v-if="!isQuizFinished">
      <Question :question="activeQuestion" @questionAnswered="questionAnswered" />
    </template>
    <Result
      v-else
      :results="results"
      :questions-answered-correctly="questionsAnsweredCorrectly"
    />
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset()"
    >Reset</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ResultComponent from "./components/result.component.vue";
import { Question, Result } from "@quiz/models";
import ProgressBarComponent from "./components/progress-bar.component.vue";
import QuestionComponent from "./components/question.component.vue";
import { getQuestions, getResults } from "./utils/quiz.utils";

@Options({
  components: {
    ProgressBar: ProgressBarComponent,
    Question: QuestionComponent,
    Result: ResultComponent,
  },

  data(): {
    questionsAnswered: number;
    questionsAnsweredCorrectly: number;
    questions?: Question[];
    results?: Result[];
  } {
    return {
      questionsAnswered: 0,
      questionsAnsweredCorrectly: 0,
      questions: undefined,
      results: undefined,
    }
  },

  computed: {
    activeQuestion(): Question {
      return this.questions[this.questionsAnswered];
    },
    isLoaded(): boolean {
      return !!this.questions && !!this.results;
    },
    isQuizFinished(): boolean {
      return this.questionsAnswered >= this.totalNumberOfQuestions;
    },
    totalNumberOfQuestions(): number {
      return this.questions.length;
    }
  },

  methods: {
    questionAnswered({ isCorrect }: { isCorrect: boolean }): void {
      this.questionsAnswered++;
      if (isCorrect) {
        this.questionsAnsweredCorrectly++;
      }
    },

    reset() {
      this.questionsAnswered = 0;
      this.questionsAnsweredCorrectly = 0;
    },
  },

  async created() {
    this.questions = await getQuestions();
    this.results = await getResults();
  },
})
export default class App extends Vue {}
</script>
