<template lang="pug">
.app
  activity-bar.activity-bar(:currentUser="currentUser")
  content.content(:currentUser="currentUser")
</template>

<script>
  import store from "@/store"
  import { computed } from "vue"
  import ActivityBar from "@/components/ActivityBar/ActivityBar"
  import Content from "@/views/Content/Content"

  export default {
    components: {
      ActivityBar,
      Content,
    },
    setup() {
      store.dispatch("getCurrentUser") // Fetch current user data.

      const currentUser = computed(() => {
        return store.getters.currentUser
      })

      return { currentUser }
    },
  }
</script>

<style lang="scss">
  // Making these styles available in children elements.
  @import "@/assets/styles/styles.scss";
  @import "@/assets/styles/reset.scss";
  @import "@/assets/styles/animations.scss";

  .app {
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
