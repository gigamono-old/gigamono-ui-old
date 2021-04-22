<template lang="pug">
#sidebar-workflows
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="workflows")

  //- Main content
  .main
    options-switch.options-switch(:options="['All', 'Triggers', 'Actions']")

    search-bar.search-bar

    collection.collection
      collapsible.collapsible(title="Integrations")
        ul.list
          li(v-for="integration in integrations")
            connector-card(
              :name="integration.name",
              :id="integration.id",
              :description="integration.description",
              :avatar32URL="integration.avatar32URL",
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
  import SidebarHeader from "@/components/SidebarHeader/SidebarHeader"
  import SearchBar from "@/components/SearchBar/SearchBar"
  import OptionsSwitch from "@/components/OptionsSwitch/OptionsSwitch"
  import Collection from "@/components/Collection/Collection"
  import Collapsible from "@/components/Collapsible/Collapsible"
  import ConnectorCard from "@/components/ConnectorCard/ConnectorCard"
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
        sessionIntegrations: computed(() => {
          return store.getters.sessionUser?.session?.integrations
        }),
        integrations: computed(() => {
          return event.sessionIntegrations?.integrations
        }),
        builtins: computed(() => {
          return event.sessionIntegrations?.builtins
        }),
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
