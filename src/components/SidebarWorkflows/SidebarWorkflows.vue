<template lang="pug">
#sidebar-workflows
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="workflows")

  //- Main content
  .main
    options-switch(:options="['All', 'Triggers', 'Actions']")

    search-bar

    collection
      collapsible-list(title="Apps")
        li One
        li Two
        li Three
        li Four

      collapsible-list(title="Builtins")
        li One
        li Two
        li Three
        li Four
</template>

<script>
  import SidebarHeader from "@/components/SidebarHeader/SidebarHeader"
  import SearchBar from "@/components/SearchBar/SearchBar"
  import OptionsSwitch from "@/components/OptionsSwitch/OptionsSwitch"
  import Collection from "@/components/Collection/Collection"
  import CollapsibleList from "@/components/CollapsibleList/CollapsibleList"

  export default {
    components: {
      SidebarHeader,
      SearchBar,
      OptionsSwitch,
      Collection,
      CollapsibleList,
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
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
