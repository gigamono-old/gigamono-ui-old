<template>
  <div id="panel">
    <Navbar id="navbar" />
    <ShortcutsBar id="shortcuts-bar" />
    <Sidebar id="sidebar" />
    <ContentArea id="content-area" />
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue"
  import ShortcutsBar from "./ShortcutsBar.vue"
  import Sidebar from "./Sidebar.vue"
  import ContentArea from "./ContentArea.vue"

  export default {
    name: "Panel",
    components: {
      Navbar,
      ShortcutsBar,
      Sidebar,
      ContentArea
    }
  }
</script>

<style lang="scss" scoped>
  #panel {
    height: 100%;
    display: grid;
    grid-template-columns: 4rem 20rem 1fr;
    grid-template-rows: 3.8em 1fr;
    grid-template-areas:
      "navbar navbar navbar"
      "shortcuts-bar sidebar content-area";
  }

  #navbar {
    grid-area: navbar;
  }

  #shortcuts-bar {
    grid-area: shortcuts-bar;
  }

  #sidebar {
    grid-area: sidebar;
  }

  #content-area {
    grid-area: content-area;
  }
</style>
