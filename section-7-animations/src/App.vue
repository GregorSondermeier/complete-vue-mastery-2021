<template>
  <h1>Section 7: Animations</h1>
  <hr />
  <CssFadeTransition></CssFadeTransition>
  <hr />
  <CssZoomAnimation></CssZoomAnimation>
</template>

<script>
import CssFadeTransition from "./CssFadeTransition/CssFadeTransition";
import CssZoomAnimation from "./CssZoomAnimation/CssZoomAnimation";

export default {
  name: "App",
  components: { CssZoomAnimation, CssFadeTransition },
};
</script>
