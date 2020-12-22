<template>
  <div class="wrapper">
    <div class="text">Team A</div>
    <div class="icon-wrapper">
      <div class="icon-dropdown-2" />
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    height: 1.7rem;
    border-radius: 0.1em;
    border: solid 1px var(--color-dot-bg);
    padding: 0 0.5em;

    > .text {
      color: var(--color-text-black-focus);
    }

    > .icon-wrapper {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;

      > .icon-dropdown-2 {
        width: 0.7em;
        height: 0.7em;
        background-color: var(--color-text-black-min-focus);
        transform: rotate(-90deg);
      }
    }

    &:hover {
      cursor: pointer;

      > .icon-wrapper > .icon-dropdown-2 {
        background-color: var(--color-primary-focus);
      }

      > .text {
        color: var(--color-primary-focus);
      }
    }
  }
</style>
