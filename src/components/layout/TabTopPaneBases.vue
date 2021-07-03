"
<template lang="pug">
#top-pane-bases
  TabTopPaneLeftSection(:pageIndex="null", :pages="null", :pageClicked="null")
  .mid-content
  TabTopPaneRightSection(:profile="null")
</template>

<script>
  import TabTopPaneLeftSection from "@/components/layout/TabTopPaneLeftSection"
  import TabTopPaneRightSection from "@/components/layout/TabTopPaneRightSection"

  export default {
    components: {
      TabTopPaneLeftSection,
      TabTopPaneRightSection,
    },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  #top-pane-bases {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 var(--spacing-tab-element-margin);

    > .mid-content {
      flex: 1 1 auto;
    }
  }
</style>
