<template lang="pug">
main#content
  sidebar-workflow.sidebar
  content-area.content-area
</template>

<script>
  import Sidebar from "@/components/Sidebar/Sidebar"
  import ContentArea from "@/components/ContentArea/ContentArea"
  export default {
    components: { Sidebar, ContentArea },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #content {
    height: inherit;
    width: inherit;
    grid-template-areas: "sidebar content-area";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;

    > .sidebar {
      grid-area: sidebar;
    }

    > .content-area {
      grid-area: content-area;
    }
  }
</style>
