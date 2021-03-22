<template lang="pug">
button
  slot
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/styles.scss";

  button {
    background-color: red;
    color: black;
    font-family: var(--font-primary);
  }
</style>
