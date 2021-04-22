"
<template lang="pug">
#top-pane-workflows

  // TODO: ABSTRACT
  .left-content
    .icon-everything-wrapper
      .icon-everything

    .v-divider

    ul.page-list
      li(v-for="(workflow, idx) in focusWorkflows", :class="{ 'selected': idx === focusWorkflowIndex }")
        .name {{ workflow.name }}
        .highlight-bar
        .v-divider

    .icon-plus-wrapper
      .icon-plus

  //- MID
  .mid-content

  // TODO: ABSTRACT
  .right-content
    .icon-notification-wrapper
      .icon-notification
      .notification-dot

    .v-divider

    .user-profile
      .img-wrapper
        .halo
        img.avatar-user(:src="profile?.avatar32URL")

      .icon-expand-arrow
</template>

<script>
  import { reactive, computed, toRefs } from "vue"
  import store from "@/store"

  export default {
    setup() {
      const event = reactive({
        profile: computed(() => {
          return store.getters.sessionUser?.profile
        }),
        focusWorkspace: computed(() => {
          const index = store.getters.sessionUser?.session?.focusWorkspaceIndex
          return store.getters.sessionUser?.session?.workspaces?.[index]
        }),
        focusProject: computed(() => {
          const index = event.focusWorkspace?.focusProjectIndex
          return event.focusWorkspace?.projects?.[index]
        }),
        focusWorkflows: computed(() => {
          return event.focusProject?.workflows
        }),
        focusWorkflowIndex: computed(() => {
          return event.focusProject?.focusWorkflowIndex
        }),
      })

      return { ...toRefs(event) }
    },
  }
</script>

<style lang="scss" scoped>
  #top-pane-workflows {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 var(--spacing-tab-element-margin);

    .v-divider {
      width: 0.0625rem;
      height: 1.5rem;
      background-color: var(--color-bg);
    }

    > .left-content {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 0.875rem;
      color: var(--color-text-4);

      > .icon-everything-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-bg-5);
        margin-right: var(--spacing-tab-element-margin);
        padding: 0.375rem;
        width: auto;
        height: fit-content;
        border-radius: var(--border-rad-lg);
        cursor: pointer;

        > .icon-everything {
          width: 0.75rem;
          height: 0.75rem;
          background-color: var(--color-text-6);
        }

        &:hover {
          background-color: var(--color-bg);
        }

        &:active {
          > .icon-everything {
            background-color: var(--color-primary);
          }
        }
      }

      > ul.page-list {
        display: flex;
        align-items: center;
        height: 100%;

        > li {
          display: flex;
          align-items: center;
          position: relative;
          height: 100%;
          cursor: pointer;
          user-select: none;

          > .name {
            margin: 0 var(--spacing-tab-element-margin);
          }

          > .highlight-bar {
            height: 0.25rem;
            width: 85%;
            margin-left: 7.5%;
            position: absolute;
            bottom: -0.125rem;
            background-color: var(--color-bg);
            border-top-left-radius: var(--border-rad-lg);
            border-top-right-radius: var(--border-rad-lg);
            display: none;
          }

          &.selected {
            > .name {
              color: var(--color-primary-2);
            }

            > .highlight-bar {
              display: inline-block;
              background-color: var(--color-primary);
            }
          }

          &:hover {
            > .name {
              color: var(--color-text-0);
            }

            > .highlight-bar {
              display: inline-block;
            }
          }

          &:active {
            > .name {
              color: var(--color-primary);
            }
          }
        }
      }

      > .icon-plus-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 var(--spacing-tab-element-margin);
        padding: 0.375rem;
        width: auto;
        height: fit-content;
        border-radius: var(--border-rad-lg);
        cursor: pointer;

        > .icon-plus {
          width: 0.75rem;
          height: 0.75rem;
          background-color: var(--color-text-5);
        }

        &:hover {
          background-color: var(--color-bg-5);
        }

        &:active {
          > .icon-plus {
            background-color: var(--color-primary);
          }
        }
      }
    }

    > .mid-content {
      flex: 1 1 auto;
    }

    > .right-content {
      display: flex;
      align-items: center;

      > .icon-notification-wrapper {
        margin-right: var(--spacing-tab-element-margin);
        display: flex;
        position: relative;
        cursor: pointer;

        > .icon-notification {
          width: 1.5rem;
          height: 1.5rem;
          background-color: var(--color-text-5);
        }

        > .notification-dot {
          width: 0.625rem;
          height: 0.625rem;
          position: absolute;
          border-radius: 50%;
          background-color: var(--color-error);
          top: 0.0625rem;
          right: 0.0625rem;
          border: var(--border-part) var(--color-bg-8);
        }

        &:hover {
          > .icon-notification {
            background-color: var(--color-text);
          }
        }

        &:active {
          > .icon-notification {
            background-color: var(--color-primary);
          }
        }
      }

      > .user-profile {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: var(--spacing-tab-element-margin);

        > .img-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 2.5rem;
          height: 2.5rem;

          > img.avatar-user {
            width: 2.125rem;
            height: 2.125rem;
            border-radius: 50%;
            box-shadow: var(--shadow-surround);
          }

          > .halo {
            border: var(--border-part-2) var(--color-bg-0);
            height: 100%;
            width: 100%;
            position: absolute;
            border-radius: 50%;
          }
        }

        > .icon-expand-arrow {
          width: 0.4375rem;
          height: 0.4375rem;
          background-color: var(--color-bg-2);
          margin-left: 0.25rem;
        }

        &:hover {
          > .img-wrapper .halo {
            box-shadow: var(--shadow-surround);
          }

          > .icon-expand-arrow {
            background-color: var(--color-bg-0);
          }
        }

        &:active {
          > .img-wrapper .halo {
            border-color: var(--color-primary);
          }

          > .icon-expand-arrow {
            background-color: var(--color-primary);
          }
        }
      }
    }
  }
</style>
