<template>
  <div class="wrapper">
    <div class="left-wrapper"></div>
    <div class="mid-wrapper">{{ title }}</div>
    <div class="right-wrapper">
      <div class="icon-collapse" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    margin: 1em 0;

    > .left-wrapper {
      flex: 1;
    }

    > .mid-wrapper {
      display: flex;
      justify-content: center;
      font-size: 1.4em;
      font-family: var(--font-brand);
      color: var(--color-text-black-min-focus);
    }

    > .right-wrapper {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: var(--space-sidebar-margin);

      > .icon-collapse {
        background-color: var(--color-text-black-min-focus);
        width: 1.2em;
        height: 1.2em;

        &:hover {
          background-color: var(--color-primary-focus);
          cursor: pointer;
        }
      }
    }
  }
</style>
