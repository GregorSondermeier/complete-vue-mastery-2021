<template>
  <h1>Section 7: Animations</h1>
  <hr />
  <CssFadeTransition></CssFadeTransition>
  <hr />
  <CssZoomAnimation></CssZoomAnimation>
  <hr />
  <JsAnimation></JsAnimation>
</template>

<script>
import CssFadeTransition from "./CssFadeTransition/CssFadeTransition.vue";
import CssZoomAnimation from "./CssZoomAnimation/CssZoomAnimation.vue";
import JsAnimation from "./JsAnimation/JsAnimation.vue";

export default {
  name: "App",
  components: {
    CssFadeTransition,
    CssZoomAnimation,
    JsAnimation,
  },
};
</script>
