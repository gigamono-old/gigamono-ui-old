<template lang="pug">
#app-card(draggable="true", @dragstart="onDragStart")
  .border-box

  .icon-drag

  .app-icon-wrapper
    //- .container
    img.app-icon(v-if="!isBuiltin", :src="avatar32URL")
    svg.app-icon(v-else)
      use(:href="`${avatar32URL}#${name.toLowerCase()}`")

  .app-details
    .name {{ name }}
    .description {{ description }}
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      description: String,
      avatar32URL: String,
      hexColor: String,
      isBuiltin: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const onDragStart = (event) => {
        // Set data to transfer.
        event.dataTransfer.setData(
          "text/plain",
          JSON.stringify({
            id: props.id,
          })
        )
      }

      return { onDragStart }
    },
  }
</script>

<style lang="scss" scoped>
  #app-card {
    --padding: 0.5rem;
    display: flex;
    padding: var(--padding);
    width: var(--spacing-sidebar-draggable-element-width);
    border-radius: var(--border-rad-xl);
    cursor: move;
    cursor: grab;
    position: relative;
    align-items: center;

    > .icon-drag {
      height: 1rem;
      width: 1rem;
      background-color: var(--color-bg);
    }

    > .app-icon-wrapper {
      padding: 0.6rem;
      background-color: var(--color-bg-8);
      border-radius: 50%;
      border: var(--border-part) var(--color-bg);
      margin-left: 0.125rem;
      user-select: none;

      > img {
        width: 1.75rem;
        height: 1.75rem;
        border-radius: var(--border-rad-lg);
      }

      > svg {
        width: 1.75rem;
        height: 1.75rem;
        fill: var(--color-text);
        border-radius: var(--border-rad-lg);
      }
    }

    > .app-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0.625rem;
      user-select: none;

      > .name {
        font-size: 0.875rem;
        color: var(--color-text);
      }

      > .description {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: var(--color-text-7);
      }
    }

    // This is needed because border-box on parent causes elements to shift.
    // around when you apply border to the parent,
    > .border-box {
      position: absolute;
      padding: var(--padding);
      width: 100%;
      height: 100%;
      border-radius: var(--border-rad-xl);
      z-index: 0;
      margin-left: calc(-1 * var(--padding));
      border: var(--border-part) var(--color-bg-5);
    }

    &:hover {
      box-shadow: var(--shadow-primary-blur);

      > .icon-drag {
        background-color: var(--color-text-6);
      }

      > .app-icon-wrapper {
        border: var(--border-part) var(--color-bg-0);
      }

      > .app-details {
        > .name {
          color: var(--color-text-0);
        }

        > .description {
          color: var(--color-text-5);
        }
      }

      > .border-box {
        border: var(--border-part) var(--color-bg);
      }
    }

    &:active {
      cursor: grabbing;
    }
  }
</style>
