<template lang="pug">
.search-bar
  .border-box
  .icon-search
  input(placeholder="Lorem ipsum dolor")
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .search-bar {
    height: 1.8rem;
    width: var(--spacing-sidebar-element-width);
    margin-top: var(--spacing-sidebar-element-margin);
    background-color: var(--color-bg-5);
    display: flex;
    align-items: center;
    border-radius: var(--border-rad-xl);
    padding: 0 0.625rem;
    cursor: pointer;
    position: relative;

    > .icon-search {
      width: 0.9rem;
      background-color: var(--color-text-7);
      z-index: 1;
    }

    > input {
      flex: 1 0 auto;
      height: 100%;
      margin-left: 0.5rem;
      color: var(--color-text);
      font-family: var(--font-primary);
      font-size: 1rem;
      z-index: 2;

      &::placeholder {
        color: var(--color-text-8);
      }
    }

    // This is needed because border-box on parent causes elements to shift.
    // around when you apply border to the parent,
    > .border-box {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-left: -0.625rem;
      border-radius: var(--border-rad-xl);
      z-index: 0;
    }

    &:hover,
    &:focus-within {
      background-color: var(--color-bg);

      > .border-box {
        border: var(--border-bg-part-0) var(--color-bg-1);
      }
    }
  }
</style>
