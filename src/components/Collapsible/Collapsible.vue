<template lang="pug">
.collapsible
  .head(@click="toggleContent", :class="cls")
    .container
      .title {{title}}
      .icon-expand-arrow-2
  .content(v-show="contentVisible")
    slot
</template>

<script>
  import { ref } from "vue"

  export default {
    props: {
      title: String,
    },
    setup() {
      const contentVisible = ref(true)
      const cls = ref({ expanded: contentVisible.value })

      const toggleContent = () => {
        contentVisible.value = !contentVisible.value
        cls.value = { expanded: contentVisible.value }
      }

      return {
        toggleContent,
        contentVisible,
        cls,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .collapsible {
    display: flex;
    flex-direction: column;
    border-top: var(--border-part) var(--color-bg-4);

    > .head {
      height: 3rem;
      display: flex;
      justify-content: center;
      cursor: pointer;

      .container {
        width: var(--spacing-general-element-width);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .title {
          font-weight: 700;
          font-size: 0.7rem;
          color: var(--color-text-4);
          text-transform: uppercase;
          user-select: none;
        }

        > .icon-expand-arrow-2 {
          width: 0.6rem;
          height: 0.6rem;
          background-color: var(--color-text-7);
          transform: rotate(-90deg);
        }
      }

      &.expanded {
        border-bottom: var(--border-part) var(--color-bg-4);

        > .container {
          > .title {
            color: var(--color-primary-2);
          }

          > .icon-expand-arrow-2 {
            background-color: var(--color-primary-2);
            transform: rotate(0deg);
          }
        }
      }

      &:hover {
        background-color: var(--color-bg-6);
      }
    }

    > .content {
      display: flex;
      justify-content: center;
    }

    &:last-of-type > .head {
      border-bottom: var(--border-part) var(--color-bg-4);
    }
  }
</style>
