<template>
  <aside id="shortcuts-bar">
    <div class="top-wrapper">
      <router-link to="/dashboard">
        <div class="icon-dashboard" />
      </router-link>

      <router-link to="/workflows">
        <div class="icon-workflows" />
      </router-link>

      <router-link to="/workflows">
        <div class="icon-explore" />
      </router-link>

      <router-link to="/workflows">
        <div class="icon-credentials" />
      </router-link>
    </div>

    <div class="h-divider" />

    <div class="bottom-wrapper-1">
      <router-link to="/workflows">
        <div class="icon-help" />
      </router-link>

      <router-link to="/workflows">
        <div class="icon-developers" />
      </router-link>

      <router-link to="/workflows">
        <div class="icon-settings" />
      </router-link>
    </div>

    <div class="bottom-wrapper-2">
      <router-link to="/workflows">
        <div class="avatar-workspace" />
      </router-link>
    </div>
  </aside>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @mixin a-styles {
    > a {
      display: flex;
      width: 100%;
      height: var(--height-shortcuts-bar-icon);
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }

  @mixin a-icon-styles {
    > a > div {
      width: 1.1rem;
      height: 1.1rem;
      background-color: var(--color-icon);
    }

    > a:hover {
      > div {
        background-color: var(--color-primary-focus);
      }

      // Used to show the highlight behind the shortcuts.
      &::before {
        content: "";
        position: absolute;
        height: calc(var(--height-shortcuts-bar-icon) * 0.8);
        width: calc(100% - 0.2rem);
        background-color: var(--color-card-bg);
        border-radius: 0.3rem 0 0 0.3rem;
        border-width: var(--thickness-panel-border);
        border-color: var(--color-dot-bg);
        border-style: solid none solid solid;
        box-shadow: var(--shadow-icon-highlight);
        right: -0.1rem; // May need to use calc for this based on width.
      }

      // Used to hide the weird shadow from the shortcuts bar.
      &::after {
        content: "";
        position: absolute;
        height: calc(var(--height-shortcuts-bar-icon) * 0.8);
        width: 0.5rem;
        background-color: var(--color-card-bg);
        border-radius: 0.3rem 0 0 0.3rem;
        right: -0.5rem;
      }
    }
  }

  #shortcuts-bar {
    background-color: var(--color-card-bg);
    z-index: 2; // Needed for setting shadow on grid elements.
    box-shadow: var(--shadow-panel-right);
    border-right: solid var(--thickness-panel-border) var(--color-dot-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 1rem 0;

    @include a-styles;
    @include a-icon-styles;
  }

  .h-divider {
    width: 2rem;
  }

  .bottom-wrapper-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 1rem 0;

    @include a-styles;
    @include a-icon-styles;
  }

  .bottom-wrapper-2 {
    display: flex;
    flex-direction: column;
    border-top: solid var(--thickness-panel-border) var(--color-dot-bg);
    width: 100%;
    height: var(--height-shortcuts-bar-icon);

    @include a-styles;

    > a > div[class^="avatar"] {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
</style>
