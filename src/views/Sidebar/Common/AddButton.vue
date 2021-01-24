<template>
  <div class="wrapper">
    <div class="icon-plus" />
    <span class="text">Add Folder</span>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 var(--space-sidebar-margin);
    padding: 0.5em 0;

    > .icon-plus {
      width: 0.6em;
      height: 0.6em;
      background-color: var(--color-input-hint);
    }

    > .text {
      margin-left: 0.3em;
      color: var(--color-input-hint);
    }

    &:hover {
      background-color: var(--color-bg);
      border-radius: 0.2em;
      cursor: pointer;

      > .icon-plus {
        background-color: var(--color-primary-focus);
      }

      > .text {
        color: var(--color-primary-focus);
      }
    }
  }
</style>
