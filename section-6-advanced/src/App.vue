<template>
  <PropsAndEvents />
  <hr />
  <Slots />
  <hr />
  <DynamicComponents />
</template>

<script>
import PropsAndEvents from "./PropsAndEvents/PropsAndEvents";
import Slots from "./Slots/Slots";
import DynamicComponents from "./DynamicComponents/DynamicComponents";

export default {
  name: 'App',

  components: {
    DynamicComponents,
    Slots,
    PropsAndEvents,
  },
}
</script>
