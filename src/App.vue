<template lang="pug">
.app
  activity-bar.activity-bar
  content.content
</template>

<script>
  import store from "@/store"
  import ActivityBar from "@/components/layout/ActivityBar"
  import Content from "@/views/Content/Content"

  export default {
    components: {
      ActivityBar,
      Content,
    },
    setup() {
      store.dispatch("user/getSessionUser") // Fetch current user data.
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
    grid-template-rows: minmax(0, 1fr);

    > .activity-bar {
      grid-area: activity-bar;
    }

    > .content {
      grid-area: content;
    }
  }
</style>
