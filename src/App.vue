<template lang="pug">
Panel
</template>

<script>
  import Panel from "./components/Panel.vue"

  export default {
    name: "App",
    components: {
      Panel,
    },
  }
</script>

<style lang="scss">
  // Making these styles available in children elements.
  @import "./assets/styles/styles.scss";
  @import "./assets/styles/animations.scss";
</style>
