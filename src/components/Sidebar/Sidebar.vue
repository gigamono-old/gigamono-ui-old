<template lang="pug">
#sidebar
  .projects

  slot
</template>

<script>
  export default {
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    width: 100%;
    height: inherit;
    background-color: crimson;
  }
</style>
