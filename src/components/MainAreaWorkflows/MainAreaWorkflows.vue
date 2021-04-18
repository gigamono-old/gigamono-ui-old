<template lang="pug">
// TODO: Remove resize event
#main-area-workflows(
  @drop="onDrop",
  @drop.prevent,
  @dragenter.prevent,
  @dragover.prevent,
  ref="mainAreaElement"
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
  import { ref, computed } from "vue"
  import store from "@/store"

  export default {
    components: {
      WorkflowStepCard,
    },
    setup() {
      const containerElement = ref(null)
      const mainAreaElement = ref(null)
      const steps = computed(() => store.getters.currentWorkflow.steps)

      // ----
      const stylePosition = ({ x, y }) => ({
        left: x + "px",
        top: y + "px",
      })

      // ----
      const onDrop = (event) => {
        const transferedData = JSON.parse(event.dataTransfer.getData("text/plain"))

        // Calculate the drop point from cursor and container positional information.
        const dropPoints = calculateDropPoints(containerElement.value, event)

        // Add workflow step to container.
        store.dispatch("addStepToCurrentWorkflow", dropPoints)

        // Update container bounds based on drop points.
        updateContainerBounds(dropPoints.cursorDropPoint, steps.value, containerElement.value)

        console.log(">>> Dropped", transferedData.id)
      }

      // ----
      const calculateDropPoints = (containerElement, dropEvent) => {
        const containerBoundingRect = containerElement.getBoundingClientRect()

        console.log(">>> Drop Event", dropEvent)

        // Since the dropped element coords will be relative to its parent but cursor coords is relative to the page.
        // We need to deduct the parent's offset from the final drop coords.
        const cursorDropPoint = {
          x: dropEvent.x - containerBoundingRect.x,
          y: dropEvent.y - containerBoundingRect.y,
        }

        // Also, the dropped element is rendered starting from the tip of the cursor.
        // We are going to use the dropped element width to make sure the center is at the cursor.
        // const droppedElementWidth = 16 * 25 // 16 * 25rem (width in CSS) = 400px
        const droppedElementWidth = 16 * 25 // 16 * 25rem (width in CSS) = 400px
        const height = 16 * 3 // 16 * 3rem (no reason) = 48px

        const actualDropPoint = {
          x: cursorDropPoint.x - Math.ceil(droppedElementWidth * 0.5),
          y: cursorDropPoint.y - Math.ceil(height * 0.5),
        }

        return {
          cursorDropPoint,
          actualDropPoint,
        }
      }

      // ----
      const updateContainerBounds = (latestCursorDropPoint, steps, containerElement) => {
        const paddingSize = 400 // The padding space between the bounds and cursor drop points.
        const containerBounds = store.getters.currentWorkflow.containerBounds

        // To be calculated.
        let newContainerBounds = null
        let newScrollPosition = null
        let newStepsDropPoints = [] // in-place mutation

        // There has to be one or more steps to calculate bounds.
        if (steps.size > 0) {
          // if containerBounds has not been previously assigned, we calculate it afresh using the steps.
          if (containerBounds == null) {
            newContainerBounds = calculateContainerBoundsFromSteps(
              steps,
              containerElement,
              paddingSize
            )
            console.log("KKKK1111")
          } else {
            // otherwise we calculate new containerBounds based on previous value.
            newContainerBounds = calculateContainerBoundsFromDropPoint(
              latestCursorDropPoint,
              containerBounds,
              paddingSize
            )
            console.log("KKKK2222")
          }
        }

        store.dispatch("updateContainerBounds", newContainerBounds)

        containerElement.style.width = newContainerBounds.width + "px"
        containerElement.style.height = newContainerBounds.height + "px"

        console.log(
          ">>> FIN containerElement.getBoundingClientRect()",
          containerElement.getBoundingClientRect()
        )
      }

      // ----
      const calculateContainerBoundsFromDropPoint = (
        latestCursorDropPoint,
        containerBounds,
        paddingSize
      ) => {
        console.log(">> calculateContainerBoundsFromDropPoint", containerBounds)
        console.log(">> latestCursorDropPoint", latestCursorDropPoint)

        let newWidth = containerBounds.width
        let newHeight = containerBounds.height

        if (latestCursorDropPoint.x > containerBounds.width - paddingSize) {
          newWidth = latestCursorDropPoint.x + paddingSize
        } else if (latestCursorDropPoint.x < paddingSize) {
          newWidth = containerBounds.width + (paddingSize - latestCursorDropPoint.x)
        }

        if (latestCursorDropPoint.y > containerBounds.height - paddingSize) {
          newHeight = latestCursorDropPoint.y + paddingSize
        } else if (latestCursorDropPoint.y < paddingSize) {
          newHeight = containerBounds.height + (paddingSize - latestCursorDropPoint.y)
        }

        return {
          x: containerBounds.x,
          y: containerBounds.y,
          width: newWidth,
          height: newHeight,
        }
      }

      // ----
      const calculateContainerBoundsFromSteps = (steps, containerElement, paddingSize) => {
        const { x, y, width, height } = containerElement.getBoundingClientRect()

        console.log(
          ">>> containerElement.getBoundingClientRect()",
          containerElement.getBoundingClientRect()
        )

        let leftmost = steps.get(0).cursorDropPoint.x
        let rightmost = steps.get(0).cursorDropPoint.x
        let topmost = steps.get(0).cursorDropPoint.y
        let bottommost = steps.get(0).cursorDropPoint.y

        for (let [_, step] of steps) {
          const { x, y } = step.cursorDropPoint

          if (x < leftmost) {
            leftmost = x
          } else {
            rightmost = x
          }

          if (y < topmost) {
            topmost = y
          } else {
            bottommost = y
          }
        }

        console.log(">>> extremes", {
          leftmost,
          rightmost,
          topmost,
          bottommost,
        })

        let result = calculateContainerBoundsFromDropPoint(
          { x: leftmost, y: height - paddingSize },
          { x, y, width, height },
          paddingSize
        )

        result = calculateContainerBoundsFromDropPoint(
          { x: rightmost, y: height - paddingSize },
          result,
          paddingSize
        )

        result = calculateContainerBoundsFromDropPoint(
          { x: width - paddingSize, y: topmost },
          result,
          paddingSize
        )

        result = calculateContainerBoundsFromDropPoint(
          { x: width - paddingSize, y: bottommost },
          result,
          paddingSize
        )

        console.log(">>> result", result)

        return result
      }

      return { onDrop, containerElement, mainAreaElement, steps, stylePosition }
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
      width: 100%;
      height: 100%;
      // transform: scale(1);
      position: relative;
    }
  }
</style>
