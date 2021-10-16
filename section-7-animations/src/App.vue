<template>
  <h1>Section 7: Animations</h1>
  <hr />
  <CssFadeTransition></CssFadeTransition>
  <hr />
  <CssZoomAnimation></CssZoomAnimation>
  <hr />
  <JsAnimation></JsAnimation>
  <hr />
  <CssAndJsTransitions></CssAndJsTransitions>
  <hr />
  <ListAnimations></ListAnimations>
</template>

<script>
import CssAndJsTransitions from "./CssAndJsTransitions/CssAndJsTransitions";
import CssFadeTransition from "./CssFadeTransition/CssFadeTransition.vue";
import CssZoomAnimation from "./CssZoomAnimation/CssZoomAnimation.vue";
import JsAnimation from "./JsAnimation/JsAnimation.vue";
import ListAnimations from "./ListAnimations/ListAnimations";

export default {
  name: "App",
  components: {
    CssAndJsTransitions,
    CssFadeTransition,
    CssZoomAnimation,
    JsAnimation,
    ListAnimations,
  },
};
</script>
