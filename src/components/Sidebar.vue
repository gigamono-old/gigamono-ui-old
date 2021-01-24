<template>
  <aside id="sidebar">
    <router-view name="Sidebar" />
  </aside>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  #sidebar {
    z-index: 1; // Needed for setting shadow on grid elements.
    box-shadow: var(--shadow-panel-right);
    background-color: var(--color-card-bg);
    border-right: solid var(--thickness-panel-border) var(--color-dot-bg);
    display: flex;
    flex-direction: column;
  }
</style>
