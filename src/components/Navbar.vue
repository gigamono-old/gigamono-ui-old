<template>
  <header id="navbar">
    <div class="left-wrapper">
      <div class="avatar-brand" />
      <div class="brand-name">Sageflow</div>
      <div class="v-divider" />
      <div class="breadcrumb">
        <div class="workspace">Team A</div>
        <div class="folder">Folder ABC</div>
        <div class="divider">/</div>
        <div class="file">Workflow 001</div>
      </div>
    </div>

    <div class="mid-wrapper">
      <div class="top-bar" />
      <div class="bottom-text">Share</div>
    </div>

    <div class="right-wrapper">
      <div class="notification-wrapper">
        <div class="icon-notifications" />
        <span class="status" />
      </div>
      <div class="v-divider" />
      <div class="user-details">
        <div class="name">Stephanie</div>
        <div class="role">admin</div>
      </div>
      <div class="avatar-wrapper">
        <div class="halo" />
        <div class="avatar-user" />
      </div>
      <div class="icon-dropdown" />
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  #navbar {
    z-index: 3; // Needed for setting shadow on grid elements.
    box-shadow: var(--shadow-panel-down);
    background-color: var(--color-card-bg);
    border-bottom: solid var(--thickness-panel-border) var(--color-dot-bg);
    display: flex;

    .v-divider {
      height: 2.7rem;
      margin-left: var(--space-navbar-margin);
      background-color: var(--color-dot-bg);
    }
  }

  .left-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: var(--space-navbar-margin);

    > .avatar-brand {
      width: 2.5rem;
      height: 2.5rem;
      min-width: 2.5rem;
    }

    > .brand-name {
      font-family: var(--font-brand);
      font-size: 1.8em;
      color: var(--color-text-black-min-focus);
      margin-left: var(--space-navbar-margin);
    }

    > .breadcrumb {
      display: inherit;
      align-items: inherit;
      margin-left: var(--space-navbar-margin);
      background-color: var(--color-bg);
      border-radius: 0.1rem;
      padding: 0.2rem 0.4rem;
      height: 1.8rem;
      font-size: 1.2rem;
      white-space: nowrap;

      > .workspace {
        display: inherit;
        align-items: inherit;
        height: calc(100% - 0.5rem);
        border-radius: inherit;
        padding: inherit;
        background: var(--gradient-primary);
        color: var(--color-card-bg);

        &:hover {
          cursor: pointer;
        }
      }

      > .folder {
        margin-left: 0.6rem;
        color: var(--color-text-black-min-focus);
      }

      > .divider {
        margin-left: 0.4rem;
        color: var(--color-text-black-min-focus);
      }

      > .file {
        margin-left: 0.4rem;
        color: var(--color-text-black-focus);
      }
    }
  }

  .mid-wrapper {
    display: flex;
    flex-direction: column;
    width: 5.8rem;
    min-width: 5.8rem;
    background: var(--gradient-share);
    position: relative;

    > .top-bar {
      height: 0.3rem;
      width: 100%;
      background-color: var(--color-primary);
      border-radius: 5rem;
      position: absolute;
      top: 0;
    }

    > .bottom-text {
      display: inherit;
      align-items: center;
      justify-content: center;
      color: var(--color-text-black);
      flex-grow: 1;
      font-size: 1.2rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .right-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: var(--space-navbar-margin);

    .notification-wrapper {
      position: relative;

      > .icon-notifications {
        width: 1.6rem;
        height: 1.6rem;
        background-color: var(--color-text-black);
      }

      .status {
        content: "";
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background-color: var(--color-error);
        border: solid 1px var(--color-card-bg);
        top: 0.1rem;
        right: 0.1rem;
      }

      &:hover > .icon-notifications {
        background-color: var(--color-primary-focus);
        cursor: pointer;
      }
    }

    > .user-details {
      display: inherit;
      flex-direction: column;
      align-items: flex-end;
      margin-left: var(--space-navbar-margin);
      font-family: var(--font-profile);

      > .name {
        font-size: 1.1rem;
        font-weight: 500;
        // Preventing fine-grained bold
        -webkit-font-smoothing: initial;
        -moz-osx-font-smoothing: initial;
        font-weight: 200;
        color: var(--color-text-black-focus);
      }

      > .role {
        font-size: 0.9rem;
        margin-top: 0.2rem;
        color: var(--color-text-black-min-focus);
      }
    }

    > .avatar-wrapper {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      margin-left: 0.8rem;

      > .avatar-user {
        // Had to use pixels here because browser behaviors are different with rme and round borders.
        width: 45px;
        height: 45px;
        border-radius: 50%;

        &:hover {
          cursor: pointer;
        }
      }

      > .halo {
        // Had to use pixels here because browser behaviors are different with rme and round borders.
        position: absolute;
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: solid 1px var(--color-primary-min-focus);
      }
    }

    > .icon-dropdown {
      width: 0.7rem;
      height: 0.7rem;
      margin-left: 0.8rem;
      background-color: var(--color-card-outline);

      &:hover {
        background-color: var(--color-primary-focus);
        cursor: pointer;
      }
    }
  }
</style>
