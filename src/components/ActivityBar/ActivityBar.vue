<template lang="pug">
aside#activity-bar
  .brand

  ul.main-shortcuts
    li(v-for="shortcut in activityBarMainShortcuts")
      activity-bar-shortcut.activity-bar-shortcut(type="main", :iconName="shortcut.iconName")

  ul.space-shortcuts
    //- li(v-for="")

  ul.other-shortcuts
    //- li(v-for="")
</template>

<script>
  import ActivityBarShortcut from "@/components/ActivityBarShortcut/ActivityBarShortcut"
  import { reactive, computed, toRefs } from "vue"

  export default {
    components: {
      ActivityBarShortcut,
    },
    props: {
      layoutPreferences: Object,
    },
    setup(props) {
      const event = reactive({
        activityBarMainShortcuts: computed(
          () => props.layoutPreferences && props.layoutPreferences.activityBarMainShortcuts
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
    background-color: var(--color-bg-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 var(--pad-general);
    box-sizing: border-box;

    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;

      > li {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      &.main-shortcuts {
        height: 16rem;
        align-items: center;
        justify-content: space-between;
      }

      &.space-shortcuts {
        background-color: green;
        flex-grow: 1;
      }

      &.other-shortcuts {
        background-color: yellow;
      }
    }
  }
</style>
