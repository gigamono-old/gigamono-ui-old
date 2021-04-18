<template lang="pug">
.workflow-step-card
  .head
  workflow-step-card-item
</template>

<script>
  import WorkflowStepCardItem from "@/components/WorkflowStepCardItem/WorkflowStepCardItem"

  export default {
    components: { WorkflowStepCardItem },
  }
</script>

<style lang="scss" scoped>
  .workflow-step-card {
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: yellow;
    position: absolute;
  }
</style>
