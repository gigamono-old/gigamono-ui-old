<template lang="pug">
#sidebar-documents
  //- Sidebar Header.
  sidebar-header.sidebar-header(name="documents", iconName="documents-2")

  //- Main content.
  .main
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
  #sidebar-documents {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > .main {
      flex-grow: 1;
      background-color: var(--color-bg-8);
      border-radius: var(--border-rad-md);
    }
  }
</style>
