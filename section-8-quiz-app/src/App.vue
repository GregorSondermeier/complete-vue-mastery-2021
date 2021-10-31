<template>
  <div class="ctr" v-if="isLoaded">
    <ProgressBar :questions-answered="questionsAnswered" :total-number-of-questions="totalNumberOfQuestions" />
    <transition name="fade" mode="out-in">
      <Question
        v-if="!isQuizFinished"
        :question="activeQuestion"
        @questionAnswered="questionAnswered"
      />
      <Result
        v-else
        :results="results"
        :questions-answered-correctly="questionsAnsweredCorrectly"
      />
    </transition>
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset()"
    >Reset</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Question, Result } from "@/models";
import ProgressBarComponent from "@/components/ProgressBar.vue";
import QuestionComponent from "@/components/Question.vue";
import ResultComponent from "@/components/Result.vue";
import { getQuestions, getResults } from "@/infrastructure";

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
