<template>
  <div class="result">
    <div class="title">You got sample result 1!</div>
    <div class="desc">
      Enter a short description here about the result.
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class ResultComponent extends Vue {
  msg!: string;
}
</script>
