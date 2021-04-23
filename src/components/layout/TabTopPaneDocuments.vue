"
<template lang="pug">
#top-pane-documents
  TabTopPaneLeftSection(:pageIndex="focusDocumentIndex", :pages="documents", :pageClicked="focusDocumentClicked")
  .mid-content
  TabTopPaneRightSection(:profile="profile")
</template>

<script>
  import TabTopPaneLeftSection from "@/components/layout/TabTopPaneLeftSection"
  import TabTopPaneRightSection from "@/components/layout/TabTopPaneRightSection"
  import { ref, reactive, computed, toRefs } from "vue"
  import store from "@/store"

  export default {
    components: {
      TabTopPaneLeftSection,
      TabTopPaneRightSection,
    },
    setup() {
      let focusDocumentIndex = ref(0)

      const focusDocumentClicked = (idx) => {
        focusDocumentIndex.value = idx
      }

      const event = reactive({
        profile: computed(() => store.getters["user/sessionUser"]?.profile),
        documents: computed(() => store.getters["user/focusProject"]?.documents),
      })

      return { ...toRefs(event), focusDocumentClicked, focusDocumentIndex }
    },
  }
</script>

<style lang="scss" scoped>
  #top-pane-documents {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 var(--spacing-tab-element-margin);

    > .mid-content {
      flex: 1 1 auto;
    }
  }
</style>
