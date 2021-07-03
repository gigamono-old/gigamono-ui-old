<template lang="pug">
.top-pane-right-content
  //- Notification Icon
  .icon-notification-wrapper
    .icon-notification
    .notification-dot

  //- Divider
  .v-tab-divider

  //- User Profile
  .user-profile
    .img-wrapper
      .halo
      img.avatar-user(:src="profile?.avatarURL")

    .icon-expand-arrow
</template>

<script>
  export default {
    props: {
      profile: Object,
    },
  }
</script>

<style lang="scss" scoped>
  .top-pane-right-content {
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
</style>
