<template>
  <div class="ctr">
    <ProgressBar :questions-answered="questionsAnswered" :total-number-of-questions="totalNumberOfQuestions" />
    <template v-if="!isQuizFinished">
      <Question :question="activeQuestion" @questionAnswered="questionAnswered" />
    </template>
    <Result v-else />
    <button type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ResultComponent from "./components/result.component.vue";
import { Question, Result } from "@quiz/models";
import ProgressBarComponent from "./components/progress-bar.component.vue";
import QuestionComponent from "./components/question.component.vue";

@Options({
  components: {
    ProgressBar: ProgressBarComponent,
    Question: QuestionComponent,
    Result: ResultComponent,
  },

  data(): {
    questionsAnswered: number;
    questionsAnsweredCorrectly: number;
    questions: Question[];
    results: Result[];
  } {
    return {
      questionsAnswered: 0,
      questionsAnsweredCorrectly: 0,
      questions: [
        {
          q: 'What is 2 + 2?',
          answers: [
            {
              text: '4',
              isCorrect: true
            },
            {
              text: '3',
              isCorrect: false
            },
            {
              text: 'Fish',
              isCorrect: false
            },
            {
              text: '5',
              isCorrect: false
            }
          ]
        },
        {
          q: 'How many letters are in the word "Banana"?',
          answers: [
            {
              text: '5',
              isCorrect: false
            },
            {
              text: '7',
              isCorrect: false
            },
            {
              text: '6',
              isCorrect: true
            },
            {
              text: '12',
              isCorrect: false
            }
          ]
        },
        {
          q: 'Find the missing letter: C_ke',
          answers: [
            {
              text: 'e',
              isCorrect: false
            },
            {
              text: 'a',
              isCorrect: true
            },
            {
              text: 'i',
              isCorrect: false
            }
          ]
        },
      ] as Question[],
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!"
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!"
        }
      ] as Result[],
    }
  },

  computed: {
    activeQuestion(): Question {
      return this.questions[this.questionsAnswered];
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
    }
  }
})
export default class App extends Vue {}
</script>
