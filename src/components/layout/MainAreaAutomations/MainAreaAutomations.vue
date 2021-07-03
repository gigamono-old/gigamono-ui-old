<template lang="pug">
#main-area-automations
  .container(ref="containerElement")
</template>

<script>
  export default {
    components: {},
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #main-area-automations {
    height: 100%;
    width: 100%;
    overflow: auto;

    > .container {
      background-image: radial-gradient(
        var(--color-bg-dot) 6%,
        var(--color-bg-6) 8%
      ); // The dot. Repeats
      background-size: 38px 38px; // The box around each dot.
      min-width: 100%;
      min-height: 100%;
      transform: scale(1);
      position: relative;
    }
  }
</style>
