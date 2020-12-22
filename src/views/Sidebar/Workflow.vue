<template>
  <div>
    <Header class="header" title="Workflows" />

    <SearchBar class="search-bar" placeholder="Search..." />

    <Select class="select" />

    <div class="content-wrapper">
      <div class="folders-wrapper">
        <Folder title="Folder DASH 000" :options="[]" />
        <Folder title="Folder DASH 001" :options="[]" />
      </div>
      <AddButton />
    </div>
  </div>
</template>

<script>
  import Folder from "./Common/Folder.vue";
  import Header from "./Common/Header.vue";
  import AddButton from "./Common/AddButton.vue";
  import SearchBar from "../../components/Common/SearchBar.vue";
  import Select from "../../components/Common/Select.vue";

  export default {
    components: {
      Folder,
      Header,
      AddButton,
      SearchBar,
      Select
    }
  };
</script>

<style lang="scss" scoped>
  // ABSTRACT! MIXIN! FIX MARGIN!
  .header {
    margin: 1em 0 2em 0;
  }

  .search-bar,
  .select {
    margin: 1em var(--space-sidebar-margin);
  }

  .content-wrapper {
    > .folders-wrapper {
      margin: 2em 0 1em 0;
    }

    > .add-button {
      margin: 1em var(--space-sidebar-margin);
    }
  }
</style>
