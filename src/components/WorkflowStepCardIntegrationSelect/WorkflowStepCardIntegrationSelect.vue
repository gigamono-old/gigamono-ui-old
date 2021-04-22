<template lang="pug">
li.workflow-step-card-integration-select
  // TODO: ABSTRACT
  .head(v-if="expanded", @click="expand")
    // TODO: Dynamic
    .img-wrapper
      img(:src="`avatars/ext-58ef9d3b-ab35-4021-b15f-2e1530dd8e05/avatar-84-twitter.webp`")
      .status-dot

    .v-divider

    .tag TYPE

    // TODO: Dynamic
    .integration-name Twitter

  .main(v-else)
    .title Select Integration
    search-bar.search-bar
    collection.collection
      grid-list.grid-list(title="Integrations", :list="integrations")
      grid-list.grid-list(title="Builtins", :list="builtins", :isSVG="true")
</template>

<script>
  import SearchBar from "@/components/SearchBar/SearchBar"
  import Collection from "@/components/Collection/Collection"
  import GridList from "@/components/GridList/GridList"
  import { ref, toRefs, reactive, computed } from "vue"
  import store from "@/store"

  export default {
    components: {
      SearchBar,
      Collection,
      GridList,
    },
    setup() {
      const expanded = ref(true)

      const expand = () => {
        expanded.value = !expanded.value
      }

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

      return { ...toRefs(event), expanded, expand }
    },
  }
</script>

<style lang="scss" scoped>
  .workflow-step-card-integration-select {
    display: flex;
    width: 100%;

    > .head {
      display: flex;
      background-color: var(--color-bg-6);
      border-radius: var(--border-rad-lg);
      border: var(--border-part) var(--color-bg);
      align-items: center;
      cursor: pointer;
      width: 100%;

      > .img-wrapper {
        padding: 0.625rem;
        border-radius: var(--border-rad-md);
        width: fit-content;
        height: auto;
        position: relative;

        img {
          width: 2rem;
          height: 2rem;
        }

        .status-dot {
          position: absolute;
          width: 1.25rem;
          height: 1.25rem;
          top: -0.25rem;
          left: -0.25rem;
          border: var(--border-part-0) var(--color-bg-8);
          border-radius: 50%;
          background-color: var(--color-error);
        }
      }

      > .v-divider {
        width: 0.0625rem;
        height: 1.625rem;
        background-color: var(--color-bg-1);
      }

      > .tag {
        margin-left: 0.625rem;
        font-size: 0.8125rem;
        padding: 0.3125rem 0.5rem;
        color: var(--color-bg-8);
        background: var(--gradient-secondary-primary);
        border-radius: var(--border-rad-md);
      }

      > .integration-name {
        color: var(--color-text-4);
        margin-left: 0.625rem;
        font-size: 0.9375rem;
        font-weight: 600;
      }

      &:hover {
        box-shadow: var(--shadow-primary-blur);

        > .integration-name {
          color: var(--color-text-0);
        }
      }
    }

    > .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: var(--border-rad-lg);
      border: var(--border-part) var(--color-bg);
      padding: calc(var(--spacing-step-card-element-margin) * 2) 0;

      > .title {
        width: var(--spacing-general-element-width);
        font-size: 1.0625rem;
        font-weight: 600;
        color: var(--color-text-4);
      }

      > .search-bar {
        width: var(--spacing-general-element-width);
        margin-top: var(--spacing-step-card-element-margin);
      }

      > .collection {
        width: var(--spacing-general-element-width);
        margin-top: var(--spacing-step-card-element-margin);

        > .grid-list:not(:first-of-type) {
          margin-top: var(--spacing-step-card-element-margin);
        }
      }

      &:hover {
        box-shadow: var(--shadow-primary-blur);
      }
    }
  }
</style>
