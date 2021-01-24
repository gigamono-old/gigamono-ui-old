<template>
  <div class="wrapper">
    <div class="icon-search" />
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: String
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    height: 1.7rem;
    border-radius: 5em;
    border: solid 1px var(--color-dot-bg);
    padding: 0 0.5em;

    > .icon-search {
      background-color: var(--color-input-hint);
    }

    > input {
      width: 100%;
      height: 90%;
      margin-left: 0.2em;
      font-size: 1em;
      font-family: var(--font-general);
      color: var(--color-text-black);

      &::placeholder {
        color: var(--color-input-hint);
        height: 100%;
      }
    }
  }
</style>
