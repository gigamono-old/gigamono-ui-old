<template>
  <header id="navbar">
    <div class="left-wrapper">
      <img src="../assets/images/logo.svg" />
      <div class="brand-name">Sageflow</div>
      <div class="divider" />
      <div class="breadcrumb"></div>
    </div>
    <div class="mid-wrapper"></div>
    <div class="right-wrapper">
      <img
        src="../assets/icons/icon-notifications.svg"
        alt="notification"
        class="icon-notification"
      />
      <div class="divider" />
      <div class="user-details">
        <div class="name">Stephanie</div>
        <div class="role">admin</div>
      </div>
      <img src="../assets/images/avatar-jermaine.png" />
      <img src="../assets/icons/icon-dropdown.svg" />
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  #navbar {
    background-color: var(--color-card-bg);
    border-bottom: solid 1px var(--color-bg-dot);
    display: flex;

    .divider {
    }
  }

  .left-wrapper {
    flex: 1;
    display: flex;
  }

  .mid-wrapper {
    display: flex;
  }

  .right-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
</style>
