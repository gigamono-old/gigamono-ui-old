<template>
  <div>
    <div class="header">
      <div class="left-wrapper"></div>
      <div class="mid-wrapper">{{ title }}</div>
      <div class="right-wrapper">
        <img src="../../assets/icons/icon-collapse.svg" alt="collapse" />
      </div>
    </div>
    <div class="content-wrapper">
      <Folder title="Folder DASH 000" :options="[]" />
      <Folder title="Folder DASH 001" :options="[]" />
      <div class="add-button">
        <img src="../../assets/icons/icon-plus.svg" />
        <div class="text">Add Folder</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Folder from "../../components/Common/Folder.vue";

  export default {
    data: function() {
      return {
        title: "Dashboard"
      };
    },
    components: {
      Folder
    }
  };
</script>

<style lang="scss" scoped>
  // TODO ABSTRACT HEADER IF POSSIBLE
  .header {
    display: flex;

    .left-wrapper {
      flex: 1;
    }

    .mid-wrapper {
      display: flex;
      justify-content: center;
    }

    .right-wrapper {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }

  .content-wrapper {
    flex: 1;
    .add-button {
      display: flex;
      flex-direction: row;
    }
  }
</style>
