<template lang="pug">
#sidebar-workflows
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="workflows")

  //- Main content
  .main
    options-switch.options-switch(:options="['All', 'Triggers', 'Actions']")

    search-bar.search-bar

    collection.collection
      collapsible.collapsible(title="Apps")
        ul.list
          li(v-for="app in apps")
            connector-card(
              :name="app.name",
              :id="app.id",
              :description="app.description",
              :avatar32URL="app.avatar32URL",
            )

      collapsible.collapsible(title="Builtins")
        ul.list
          li(v-for="builtin in builtins")
            connector-card(
              :name="builtin.name",
              :id="builtin.id",
              :description="builtin.description",
              :avatar32URL="builtin.avatar32URL",
              :isBuiltin="true"
            )
</template>

<script>
  import store from "@/store"
  import SidebarHeader from "@/components/layout/SidebarHeader"
  import SearchBar from "@/components/ui/SearchBar"
  import OptionsSwitch from "@/components/ui/OptionsSwitch"
  import Collection from "@/components/ui/Collection"
  import Collapsible from "@/components/ui/Collapsible"
  import ConnectorCard from "@/components/ui/ConnectorCard"
  import { computed, toRefs, reactive } from "vue"

  export default {
    components: {
      SidebarHeader,
      SearchBar,
      OptionsSwitch,
      Collection,
      Collapsible,
      ConnectorCard,
    },
    setup() {
      const event = reactive({
        apps: computed(() => store.getters["user/integrations"]?.apps),
        builtins: computed(() => store.getters["user/integrations"]?.builtins),
      })

      return { ...toRefs(event) }
    },
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
      background-color: var(--color-bg-8);
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;

      > .options-switch,
      > .search-bar {
        width: var(--spacing-general-element-width);
        margin-top: var(--spacing-sidebar-element-margin);
      }

      > .collection > .collapsible ul.list {
        width: 100%;
        margin: 0.5rem 0;

        > li {
          width: 100%;
          display: flex;
          justify-content: center;

          &:not(:first-of-type) {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
</style>
