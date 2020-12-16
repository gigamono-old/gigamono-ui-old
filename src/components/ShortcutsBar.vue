<template>
  <aside id="shortcuts-bar">
    <div class="top-wrapper">
      <router-link to="/dashboard">
        <img src="../assets/icons/icon-dashboard.svg" class="icon-dashboard" />
      </router-link>
      <router-link to="/workflows">
        <img src="../assets/icons/icon-workflows.svg" class="icon-workflows" />
      </router-link>
      <img src="../assets/icons/icon-explore.svg" class="icon-explore" />
      <img src="../assets/icons/icon-credentials.svg" class="icon-credentials" />
    </div>
    <div class="bottom-wrapper-1">
      <img src="../assets/icons/icon-help.svg" class="icon-help" />
      <img src="../assets/icons/icon-developers.svg" class="icon-developer" />
      <img src="../assets/icons/icon-settings.svg" class="icon-settings" />
      <div class="divider" />
    </div>
    <div class="bottom-wrapper-2">
      <img src="../assets/images/logo.svg" class="group-avatar" />
    </div>
  </aside>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../styles/common.scss";

  #shortcuts-bar {
    background-color: var(--color-card-bg);
    border-right: solid 1px var(--color-bg-dot);
    display: flex;
    flex-direction: column;
  }

  .top-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;

    img {
      // width: 100%;
    }
  }

  .bottom-wrapper-1 {
    display: flex;
    flex-direction: column;
  }

  .bottom-wrapper-2 {
  }
</style>
