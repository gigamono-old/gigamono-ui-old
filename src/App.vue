<template>
  <Panel />
</template>

<script>
  import Panel from "./components/Panel.vue";

  export default {
    name: "App",
    components: {
      Panel
    }
  };
</script>

<style lang="scss">
  @import "./styles/common.scss";

  html,
  body {
    height: 100%;
  }
</style>
