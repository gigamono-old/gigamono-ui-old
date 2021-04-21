<template lang="pug">
main#content
  sidebar.sidebar
  main-area.main-area
  tab.tab
</template>

<script>
  import Tab from "@/views/Tab/Tab"
  import Sidebar from "@/views/Sidebar/Sidebar"
  import MainArea from "@/views/MainArea/MainArea"

  export default {
    components: { Tab, Sidebar, MainArea },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #content {
    height: inherit;
    width: inherit;
    display: grid;
    grid-template-areas:
      "sidebar tab"
      "sidebar main-area";
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);

    > .tab {
      grid-area: tab;
    }

    > .sidebar {
      grid-area: sidebar;
    }

    > .main-area {
      grid-area: main-area;
    }
  }
</style>
