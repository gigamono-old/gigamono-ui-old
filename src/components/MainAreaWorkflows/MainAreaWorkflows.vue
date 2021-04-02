<template lang="pug">
#main-area-workflows
</template>

<script>
  export default {
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #main-area-workflows {
    height: 100%;
    width: 100%;
    background: radial-gradient(var(--color-bg-dot) 6%, var(--color-bg-6) 8%); // The dot. Repeats
    background-size: 38px 38px; // The box around a dot.
    background-position: -10px -10px; // Offset of the background box.
  }
</style>
