<template lang="pug">
#tab
  .top-pane
    button.collapse-wrapper(@click="toggleSidebar", :class="cls")
      .icon-expand-arrow-2
    router-view(name="tabTopPane", :sessionUser="sessionUser")

  .layout-divider

  .bottom-pane
    router-view(name="tabBottomPane", :sessionUser="sessionUser")

  .layout-divider
</template>

<script>
  import { getEmitter } from "@/event"
  import { ref } from "vue"

  export default {
    props: {
      sessionUser: Object,
    },
    setup() {
      const emitter = getEmitter()
      let sidebarVisible = ref(true)
      let cls = ref({ flipped: !sidebarVisible.value })

      const toggleSidebar = () => {
        emitter.emit("toggle-sidebar")
        sidebarVisible.value = !sidebarVisible.value
        cls.value.flipped = !sidebarVisible.value
      }

      return { toggleSidebar, cls }
    },
  }
</script>

<style lang="scss" scoped>
  #tab {
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-3);
    padding-top: var(--spacing-gutter-primary);

    .top-pane {
      height: 3rem;
      display: flex;
      align-items: center;
      background-color: var(--color-bg-8);

      > .collapse-wrapper {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: -0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: var(--border-part) var(--color-bg-1);
        background-color: var(--color-bg-8);
        border-radius: 50%;
        cursor: pointer;

        > .icon-expand-arrow-2 {
          transform: rotate(90deg);
          background-color: var(--color-bg-0);
          width: 0.5rem;
        }

        &:hover {
          box-shadow: var(--shadow-surround);
        }

        &:active {
          border-color: var(--color-bg-0);

          > .icon-expand-arrow-2 {
            background-color: var(--color-primary);
          }
        }

        &.flipped {
          background-color: var(--color-primary);
          border: var(--border-part) var(--color-bg-8);

          > .icon-expand-arrow-2 {
            background-color: var(--color-bg-8);
            transform: rotate(-90deg);
          }

          &:active {
            background-color: var(--color-primary-4);
          }
        }
      }
    }

    .bottom-pane {
      flex-grow: 1;
      background-color: var(--color-bg-8);
    }
  }
</style>
