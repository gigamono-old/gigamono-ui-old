<template>
  <div></div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  div {
    background: radial-gradient(var(--color-dot-bg) 6%, var(--color-bg) 8%); // The dot. Repeats
    background-size: 38px 38px; // The box around a dot.
    background-position: -10px -10px; // Offset of the background box.
    height: 100%;
  }
</style>
