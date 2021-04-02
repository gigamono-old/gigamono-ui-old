<template lang="pug">
aside#activity-bar
  //- Brand.
  .brand
    brand-image
    //- img(src="~@/assets/images/avatar-gigamono.svg" alt="gigamono brand image")

  .layout-divider

  //- Main shortcuts.
  ul.main-shortcuts
    li(v-for="shortcut in activityBarMainShortcuts")
      activity-bar-shortcut.activity-bar-shortcut(:iconName="shortcut.iconName", :route="shortcut.route")

  .layout-divider

  //- Spaces shortcuts.
  ul.space-shortcuts
    //- li(v-for="")

  .layout-divider

  //- Other system shorrtcuts.
  ul.other-shortcuts
    li(v-for="shortcut in activityBarOtherShortcuts")
      activity-bar-shortcut.activity-bar-shortcut(:iconName="shortcut.iconName", :route="shortcut.route")
</template>

<script>
  import BrandImage from "@/components/BrandImage/BrandImage"
  import ActivityBarShortcut from "@/components/ActivityBarShortcut/ActivityBarShortcut"
  import { reactive, computed, toRefs } from "vue"

  export default {
    components: {
      BrandImage,
      ActivityBarShortcut,
    },
    props: {
      layoutPreferences: Object,
    },
    setup(props) {
      // Getting shortcuts information from props.
      const event = reactive({
        activityBarMainShortcuts: computed(
          () => props.layoutPreferences && props.layoutPreferences.activityBarMainShortcuts
        ),
        activityBarOtherShortcuts: computed(
          () => props.layoutPreferences && props.layoutPreferences.activityBarOtherShortcuts
        ),
      })

      return { ...toRefs(event) }
    },
  }
</script>

<style lang="scss" scoped>
  #activity-bar {
    height: inherit;
    width: var(--width-activity-bar);
    background-color: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-gutter-primary);

    > .brand {
      height: 3rem;
      width: 100%;
      background-color: var(--color-bg-7);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      > #brand-svg {
        height: 1.9rem;
        width: 1.9rem;
      }
    }

    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--color-bg-7);

      > li {
        width: 100%;
        display: flex;
        justify-content: center;

        &:first-child > a {
          padding-top: 0.9rem;
        }

        &:last-child > a {
          padding-bottom: 1rem;
        }
      }

      &.space-shortcuts {
        flex-grow: 1;
      }
    }
  }
</style>
