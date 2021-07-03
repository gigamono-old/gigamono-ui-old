<template lang="pug">
#sidebar-decks
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="decks")

  //- Main content.
  .main
</template>

<script>
  import SidebarHeader from "@/components/layout/SidebarHeader"
  export default {
    components: {
      SidebarHeader,
    },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #sidebar-decks {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > .main {
      flex-grow: 1;
      background-color: var(--color-bg-8);
    }
  }
</style>
