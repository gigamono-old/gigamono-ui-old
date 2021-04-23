<template lang="pug">
.top-pane-left-content
  //- Everything Button
  .icon-everything-wrapper
    .icon-everything

  //- Divider
  .v-tab-divider

  //- Pages
  ul.page-list
    li(
      v-for="(page, idx) in pages",
      :class="{ 'selected': idx === pageIndex }"
      @click="() => pageClicked(idx)"
    )
      .name {{ page.name }}
      .highlight-bar
      .v-tab-divider

  //- Add New Page Button
  .icon-plus-wrapper
    .icon-plus
</template>

<script>
  export default {
    props: {
      pageIndex: Number,
      pages: Array,
      pageClicked: Function,
    },
  }
</script>

<style lang="scss" scoped>
  .top-pane-left-content {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 0.875rem;
    color: var(--color-text-4);

    > .icon-everything-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-bg-5);
      margin-right: var(--spacing-tab-element-margin);
      padding: 0.375rem;
      width: auto;
      height: fit-content;
      border-radius: var(--border-rad-lg);
      cursor: pointer;

      > .icon-everything {
        width: 0.75rem;
        height: 0.75rem;
        background-color: var(--color-text-6);
      }

      &:hover {
        background-color: var(--color-bg);
      }

      &:active {
        > .icon-everything {
          background-color: var(--color-primary);
        }
      }
    }

    > ul.page-list {
      display: flex;
      align-items: center;
      height: 100%;

      > li {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        cursor: pointer;
        user-select: none;

        > .name {
          margin: 0 var(--spacing-tab-element-margin);
        }

        > .highlight-bar {
          height: 0.25rem;
          width: 85%;
          margin-left: 7.5%;
          position: absolute;
          bottom: -0.125rem;
          background-color: var(--color-bg);
          border-top-left-radius: var(--border-rad-lg);
          border-top-right-radius: var(--border-rad-lg);
          display: none;
        }

        &.selected {
          > .name {
            color: var(--color-primary-2);
          }

          > .highlight-bar {
            display: inline-block;
            background-color: var(--color-primary);
          }
        }

        &:hover {
          > .highlight-bar {
            display: inline-block;
          }

          &.selected {
            > .name {
              color: var(--color-primary-1);
            }
          }
        }

        &:active {
          > .name {
            color: var(--color-primary);
          }
        }
      }
    }

    > .icon-plus-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 var(--spacing-tab-element-margin);
      padding: 0.375rem;
      width: auto;
      height: fit-content;
      border-radius: var(--border-rad-lg);
      cursor: pointer;

      > .icon-plus {
        width: 0.75rem;
        height: 0.75rem;
        background-color: var(--color-text-5);
      }

      &:hover {
        background-color: var(--color-bg-5);
      }

      &:active {
        > .icon-plus {
          background-color: var(--color-primary);
        }
      }
    }
  }
</style>
