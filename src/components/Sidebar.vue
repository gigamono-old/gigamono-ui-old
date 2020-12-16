<template>
  <aside id="sidebar">
    <router-view name="Sidebar" />
  </aside>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  #sidebar {
    background-color: var(--color-card-bg);
    border-right: solid 1px var(--color-bg-dot);
    display: flex;
    flex-direction: column;
  }
</style>
