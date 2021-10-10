<template>
  <h3>Home Page</h3>
</template>

<script>
export default {
  unmounted() {
    console.log('Home.unmounted()');
  },
  activated() {
    console.log('Home.activated()');
  },
  deactivated() {
    console.log('Home.deactivated()');
  },
}
</script>
