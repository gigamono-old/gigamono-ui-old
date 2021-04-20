<template lang="pug">
.search-bar
  .border-box
  .icon-search
  input(:placeholder="placeholder")
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: "Search",
      },
    },
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    height: 1.8rem;
    background-color: var(--color-bg-6);
    display: flex;
    align-items: center;
    border-radius: var(--border-rad-xl);
    padding: 0 0.625rem;
    position: relative;

    > .icon-search {
      width: 0.9rem;
      background-color: var(--color-text-8);
      z-index: 1;
    }

    > input {
      flex: 1 0 auto;
      height: 100%;
      margin-left: 0.5rem;
      font-size: 0.8125rem;
      z-index: 2;
      font-family: var(--font-primary);

      &::placeholder {
        color: var(--color-bg-1);
        font-family: var(--font-primary);
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
      background-color: var(--color-bg-5);

      > .border-box {
        border: var(--border-part) var(--color-bg-2);
      }
    }
  }
</style>
