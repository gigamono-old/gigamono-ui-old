<template lang="pug">
#sidebar-documents
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="documents", iconName="documents-2")

  //- Main content.
  .main
    search-bar.search-bar

    collection.collection
      // TODO: Abstract
      button.view-button(v-for="view in views")
        .icon(:class="iconClass")
        .name {{ view.name }}
        .icon-v-context-menu

    .action-wrapper
      .icon-plus
      .topic Create View
</template>

<script>
  import SidebarHeader from "@/components/layout/SidebarHeader"
  import SearchBar from "@/components/ui/SearchBar"
  import Collection from "@/components/ui/Collection"
  import store from "@/store"
  import { computed, toRefs, reactive } from "vue"

  export default {
    components: {
      SidebarHeader,
      SearchBar,
      Collection,
    },
    setup() {
      store.dispatch("getCurrentDocument")

      const event = reactive({
        currentDocument: computed(() => {
          return store.getters.currentDocument
        }),
        views: computed(() => {
          return event.currentDocument && event.currentDocument.views
        }),
      })

      return { ...toRefs(event) }
    },
  }
</script>

<style lang="scss" scoped>
  #sidebar-documents {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > .main {
      flex-grow: 1;
      background-color: var(--color-bg-8);
      border-radius: var(--border-rad-md);

      > .search-bar {
        width: 100%;
      }

      > .action-wrapper {
        display: flex;
        align-items: center;
        background-color: yellow;
        padding: 0.625rem 0.3125rem;
        border-radius: var(--border-rad-lg);

        > .icon-plus {
          width: 0.625rem;
          height: 0.625rem;
        }

        > .topic {
          font-size: 0.8125rem;
          margin-left: 0.625rem;
        }
      }
    }
  }
</style>
