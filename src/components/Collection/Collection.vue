<template lang="pug">
ul.collection
  slot
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  ul.collection {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: var(--spacing-sidebar-element-margin);
  }
</style>
