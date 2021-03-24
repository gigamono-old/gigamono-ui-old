<template lang="pug">
.container
  activity-bar.activity-bar(:layoutPreferences="layoutPreferences")
  content.content
</template>

<script>
  import store from "@/store"
  import { computed, toRefs, reactive } from "vue"
  import ActivityBar from "@/components/ActivityBar/ActivityBar"
  import Content from "@/views/Content/Content"

  export default {
    components: {
      ActivityBar,
      Content,
    },
    setup() {
      store.dispatch("getCurrentUser") // Fetch current user data.

      const event = reactive({
        layoutPreferences: computed(() => {
          const user = store.getters.currentUser
          return user && user.layoutPreferences
        }),
      })

      return { ...toRefs(event) }
    },
  }
</script>

<style lang="scss">
  // Making these styles available in children elements.
  @import "@/assets/styles/reset.scss";
  @import "@/assets/styles/styles.scss";
  @import "@/assets/styles/animations.scss";

  .container {
    height: inherit;
    display: grid;
    grid-template-areas: "activity-bar content";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;

    > .activity-bar {
      grid-area: activity-bar;
    }

    > .content {
      grid-area: content;
    }
  }
</style>
