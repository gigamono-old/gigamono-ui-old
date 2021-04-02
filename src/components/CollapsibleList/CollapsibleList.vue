<template lang="pug">
li.collapsible-list
  .head(@click="toggleList")
    .container
      .title {{title}}
      .icon-expand-arrow-2
  ul.list
    slot
</template>

<script>
  export default {
    props: {
      title: String,
    },
    setup() {
      const toggleList = () => {
        console.log("HEAD CLICKED")
      }

      return {
        toggleList,
      }
    },
  }
</script>

<style lang="scss" scoped>
  li.collapsible-list {
    display: flex;
    flex-direction: column;
    border-top: var(--border-bg-part-0) var(--color-bg-4);

    > .head {
      height: 2.5rem;
      display: flex;
      justify-content: center;
      cursor: pointer;

      .container {
        width: var(--spacing-sidebar-element-width);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .title {
          font-family: var(--font-primary);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-4);
          text-transform: uppercase;
        }

        > .icon-expand-arrow-2 {
          width: 0.6rem;
          height: 0.6rem;
          background-color: var(--color-text-7);
          transform: rotate(-90deg);
        }
      }
    }

    > ul.list {
      > li {
        width: var(--spacing-sidebar-element-width);
        background-color: yellow;
      }
    }

    &:last-of-type > .head {
      border-bottom: var(--border-bg-part-0) var(--color-bg-4);
    }
  }
</style>
