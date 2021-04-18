<template lang="pug">
#main-area-workflows(
  @drop="(event) => onDrop(event, containerElement)",
  @drop.prevent,
  @dragenter.prevent,
  @dragover.prevent
)
  .container(ref="containerElement")
    workflow-step-card(
      v-for="[index, step] in steps",
      :id="index",
      :style="stylePosition(step.actualDropPoint)"
    )
</template>

<script>
  import WorkflowStepCard from "@/components/WorkflowStepCard/WorkflowStepCard"
  import { ref } from "vue"
  import { onDrop, steps } from "./events"

  export default {
    components: {
      WorkflowStepCard,
    },
    setup() {
      const containerElement = ref(null)

      const stylePosition = ({ x, y }) => ({
        left: x + "px",
        top: y + "px",
      })

      return { onDrop, containerElement, steps, stylePosition }
    },
  }
</script>

<style lang="scss" scoped>
  #main-area-workflows {
    height: 100%;
    width: 100%;
    overflow: auto;

    > .container {
      background-image: radial-gradient(
        var(--color-bg-dot) 6%,
        var(--color-bg-6) 8%
      ); // The dot. Repeats
      background-size: 38px 38px; // The box around each dot.
      min-width: 100%;
      min-height: 100%;
      transform: scale(1);
      position: relative;
    }
  }
</style>
