<template lang="pug">
.header
  .top-wrapper
    .container
      .icon(:class="`icon-${iconName || name}`")
      .name {{name}}

  //- Layout divider.
  .layout-divider

  .nav
    .container
      .icon-long-arrow
      .destination All Projects

</template>

<script>
  export default {
    props: {
      iconName: String,
      name: String,
    },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;

    > .top-wrapper {
      width: 100%;
      height: 3rem;
      background-color: var(--color-bg-7);
      display: flex;
      align-items: center;
      justify-content: center;

      > .container {
        width: var(--spacing-general-element-width);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        > .icon {
          width: 0.8rem;
          height: 0.8rem;
          background-color: var(--color-text-5);
        }

        > .name {
          margin-left: 0.8rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          user-select: none;
          letter-spacing: 0.03125rem;
        }
      }
    }

    > .nav {
      width: 100%;
      height: 2.25rem;
      background-color: var(--color-bg-7);
      border-bottom: var(--border-part) var(--color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      > .container {
        width: var(--spacing-general-element-width);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        > .icon-long-arrow {
          height: 1.375rem;
          width: 1.375rem;
          background-color: var(--color-primary-2);
        }

        > .destination {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.0625rem;
          margin-left: 0.75rem;
          text-transform: uppercase;
          color: var(--color-primary-2);
          user-select: none;
        }
      }

      &:hover {
        background-color: var(--color-primary-8);
      }
    }
  }
</style>
