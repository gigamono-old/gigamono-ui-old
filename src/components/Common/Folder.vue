<template>
  <div class="content-wrapper">
    <div class="folder">
      <img src="../../assets/icons/icon-folder.svg" />
      <span class="title">{{ title }}</span>
      <img src="../../assets/icons/icon-dropdown.svg" />
    </div>
    <ul class="files-wrapper">
      <li class="file"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      options: Array // These are action icons shown on the folder. [{ iconUrl, function }]
    },
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .content-wrapper {
    .folder {
      height: 3em;
      background-color: var(--color-primary-min-focus);
    }
  }
</style>
