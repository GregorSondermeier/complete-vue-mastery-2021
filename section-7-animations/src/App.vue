<template>
  <h1>Section 7: Animations</h1>
  <hr />
  <FadeTransition></FadeTransition>
  <hr />
  <ZoomAnimation></ZoomAnimation>
</template>

<script>
import FadeTransition from "./FadeTransition/FadeTransition";
import ZoomAnimation from "./ZoomAnimation/ZoomAnimation";

export default {
  name: "App",
  components: { ZoomAnimation, FadeTransition },
};
</script>
