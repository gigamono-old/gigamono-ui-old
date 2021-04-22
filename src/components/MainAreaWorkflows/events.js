import store from "@/store"
import { convertRemtoPxInt } from "@/utils/css"
import { getCSSVar } from "../../utils/css"

// Handles onDrop event on the container element.
const onDrop = (event, containerElement) => {
  const steps = store.getters.workspaceProjectWorkflow.steps
  const transferedData = JSON.parse(event.dataTransfer.getData("text/plain"))

  // Calculate the drop point from cursor and container positional information.
  const dropPoints = calculateDropPoints(containerElement, event)

  // Add workflow step to container.
  store.dispatch("addStepToWorkspaceProjectWorkflow", dropPoints)

  // Update container bounds.
  updateContainerBounds(dropPoints.cursorDropPoint, steps, containerElement)
}

// Calculates the points where an element will be dropped.
const calculateDropPoints = (containerElement, dropEvent) => {
  const containerBoundingRect = containerElement.getBoundingClientRect()

  // Since the dropped element coords will be relative to its parent but cursor coords is relative to the page.
  // We need to deduct the parent's offset from the final drop coords.
  const cursorDropPoint = {
    x: dropEvent.x - containerBoundingRect.x,
    y: dropEvent.y - containerBoundingRect.y,
  }

  // Also, the dropped element is rendered starting from the tip of the cursor.
  // We are going to use the dropped element width to make sure the center is at the cursor.;//
  const droppedElementWidth = convertRemtoPxInt(getCSSVar("--spacing-step-card-width"))
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

// Updates the container bounds.
const updateContainerBounds = (latestCursorDropPoint, steps, containerElement) => {
  const containerBounds = store.getters.workspaceProjectWorkflow.containerBounds
  const paddings = { x: 1200, y: 800 } // The padding space between the bounds and cursor drop points.

  let newContainerBounds = null

  // There has to be one or more steps to calculate bounds.
  if (steps.size > 0) {
    // If containerBounds has not been previously assigned, we calculate it afresh using the steps.
    // Otherwise we calculate new containerBounds based on previous value.
    if (containerBounds == null) {
      newContainerBounds = calculateContainerBoundsFromSteps(steps, containerElement, paddings)
    } else {
      newContainerBounds = calculateContainerBoundsFromDropPoint(
        latestCursorDropPoint,
        containerBounds,
        paddings
      )
    }
  }

  store.dispatch("updateContainerBounds", newContainerBounds)
  containerElement.style.width = newContainerBounds.width + "px"
  containerElement.style.height = newContainerBounds.height + "px"
}

// Calculates container bounds using latest cursor drop point.
const calculateContainerBoundsFromDropPoint = (
  latestCursorDropPoint,
  containerBounds,
  paddings
) => {
  let newWidth = containerBounds.width
  let newHeight = containerBounds.height

  // If drop point falls inside the padding area on right or left side, extend width.
  if (latestCursorDropPoint.x > containerBounds.width - paddings.x) {
    newWidth = latestCursorDropPoint.x + paddings.x
  } else if (latestCursorDropPoint.x < paddings.x) {
    newWidth = containerBounds.width + (paddings.x - latestCursorDropPoint.x)
  }

  // If drop point falls inside the padding area at the top or bottom, extend height.
  if (latestCursorDropPoint.y > containerBounds.height - paddings.y) {
    newHeight = latestCursorDropPoint.y + paddings.y
  } else if (latestCursorDropPoint.y < paddings.y) {
    newHeight = containerBounds.height + (paddings.y - latestCursorDropPoint.y)
  }

  return {
    x: containerBounds.x,
    y: containerBounds.y,
    width: newWidth,
    height: newHeight,
  }
}

// Calculates container bounds from steps.
const calculateContainerBoundsFromSteps = (steps, containerElement, paddings) => {
  const { x, y, width, height } = containerElement.getBoundingClientRect()

  let leftmost = steps.get(0).cursorDropPoint.x
  let rightmost = steps.get(0).cursorDropPoint.x
  let topmost = steps.get(0).cursorDropPoint.y
  let bottommost = steps.get(0).cursorDropPoint.y

  // Get the extreme sides.
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

  // Form a drop point from the extremes and calculate container bounds.
  return calculateContainerBoundsFromDropPoint(
    { x: rightmost - leftmost, y: bottommost - leftmost },
    { x, y, width, height },
    paddings
  )
}

// TODO: Use translate3D for scrolling
const onScroll = () => {}

export { onDrop }
