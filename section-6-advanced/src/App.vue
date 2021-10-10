<template>
  <PropsAndEvents />
  <hr />
  <Slots />
  <hr />
  <DynamicComponents />
</template>

<script>
import PropsAndEvents from "./components/PropsAndEvents/PropsAndEvents";
import Slots from "./components/Slots/Slots";
import DynamicComponents from "./components/DynamicComponents/DynamicComponents";

export default {
  name: 'App',

  components: {
    DynamicComponents,
    Slots,
    PropsAndEvents,
  },
}
</script>
