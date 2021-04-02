<template lang="pug">
#sidebar-workflows
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="workflows")

  //- Main content
  .main
    //- Abstract
    ul.type-switch
      li.option All
      li.option Triggers
      li.option Actions

    .search-bar

    .user-apps

    .builtin-apps
</template>

<script>
  import SidebarHeader from "@/components/SidebarHeader/SidebarHeader"

  export default {
    components: {
      SidebarHeader,
    },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #sidebar-workflows {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > .main {
      flex-grow: 1;
      background-color: var(--color-bg-7);
    }
  }
</style>
