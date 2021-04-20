<template lang="pug">
.workflow-step-card
  .head(v-if="expanded", @click="expand")
    .img-wrapper
      // TODO: Dynamic
      img(:src="`avatars/ext-58ef9d3b-ab35-4021-b15f-2e1530dd8e05/avatar-84-twitter.webp`")
      .status-dot

    .v-divider

    .container
      .details
        // TODO: Dynamic
        .step-type Trigger
        .step-title
          span.number 1.
          |
          | New Spreadsheet Row Created

      .options
        .icon-help-wrapper
          .icon-help
        .icon-v-context-menu

      // TODO: Dynamic
      .integration-name Twitter

  ul.main(v-else)
    workflow-step-card-integration-select
</template>

<script>
  import WorkflowStepCardIntegrationSelect from "@/components/WorkflowStepCardIntegrationSelect/WorkflowStepCardIntegrationSelect"
  import { ref } from "vue"

  export default {
    components: { WorkflowStepCardIntegrationSelect },
    setup() {
      let expanded = ref(true)
      // let status = ref("error")
      // let statusClass = ref({ success: status.value === "success" })

      const expand = () => {
        expanded.value = !expanded.value
      }

      return { expanded, expand }
    },
  }
</script>

<style lang="scss" scoped>
  .workflow-step-card {
    position: absolute;
    width: var(--spacing-step-card-width);
    background-color: var(--color-bg-7);
    border-radius: var(--border-rad-xl);
    border: var(--border-part) var(--color-bg-2);
    user-select: none;
    display: flex;

    > .head {
      margin: var(--spacing-step-card-border-margin);
      width: 100%;
      display: flex;
      cursor: pointer;

      > .img-wrapper {
        padding: 0.625rem;
        border-radius: var(--border-rad-md);
        background-color: var(--color-bg-6);
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
          border: var(--border-part-0) var(--color-bg-7);
          border-radius: 50%;
          background-color: var(--color-error);
        }
      }

      > .v-divider {
        height: 100%;
        width: 0.0625rem;
        margin: 0 0.3125rem;
        background-color: var(--color-bg-6);
      }

      > .container {
        padding: 0 0.625rem;
        display: flex;
        width: 100%;
        background-color: var(--color-bg-6);
        border-radius: var(--border-rad-md);
        position: relative;

        > .details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 0 auto;

          > .step-type {
            color: var(--color-text-7);
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
          }

          > .step-title {
            color: var(--color-text-5);
            font-size: 0.8125rem;
            font-weight: 600;
          }
        }

        > .options {
          margin-left: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          > .icon-help-wrapper {
            padding: 0.25rem;
            border-radius: 50%;
            background-color: var(--color-text-7);
            height: fit-content;

            > .icon-help {
              width: 0.5rem;
              height: 0.5rem;
              background-color: var(--color-bg-7);
            }

            &:hover {
              background-color: var(--color-text-4);
            }

            &:active {
              background-color: var(--color-primary);
            }
          }

          > .icon-v-context-menu {
            width: 1rem;
            height: 1rem;
            background-color: var(--color-text-7);
            margin-left: 0.5rem;

            &:hover {
              background-color: var(--color-text-4);
            }

            &:active {
              background-color: var(--color-primary);
            }
          }
        }

        > .integration-name {
          position: absolute;
          font-size: 0.5rem;
          padding: 0.25rem;
          background-color: var(--color-bg-7);
          border-bottom-left-radius: var(--border-rad-xs);
          border-bottom-right-radius: var(--border-rad-xs);
          color: var(--color-text-6);
          right: 0.625rem;
        }
      }

      &:hover {
        > .container > .details {
          > .step-type {
            color: var(--color-text-5);
          }
        }
      }
    }

    > ul.main {
      margin: var(--spacing-step-card-border-margin);
      display: flex;
      width: 100%;

      > li {
        &:not(:first-of-type) {
          margin-top: var(--spacing-step-card-element-margin);
        }
      }
    }

    &:hover {
      box-shadow: var(--shadow-primary-blur);
    }
  }
</style>
