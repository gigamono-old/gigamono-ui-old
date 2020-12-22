<template>
  <div class="folder-wrapper">
    <div class="folder">
      <div class="icon-folder" />
      <span class="title">{{ title }}</span>
      <div class="icon-wrapper">
        <div class="icon-dropdown-2" />
      </div>
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
  .folder-wrapper {
    > .folder {
      background-color: var(--color-card-bg);
      height: 3rem;
      padding: 0 var(--space-sidebar-margin);
      border: solid 0.1em var(--color-dot-bg);
      border-style: solid none solid none;
      display: flex;
      align-items: center;

      > .icon-folder {
        background-color: var(--color-text-black-min-focus);
      }

      > .title {
        color: var(--color-text-black);
        margin-left: 1em;
        font-size: 1em;
      }

      > .icon-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;

        > .icon-dropdown-2 {
          width: 0.7em;
          height: 0.7em;
          background-color: var(--color-text-black-min-focus);
          transform: rotate(-180deg);
        }
      }

      &:hover {
        cursor: pointer;

        > .icon-wrapper > .icon-dropdown-2,
        > .icon-folder {
          background-color: var(--color-primary-focus);
        }

        > .title {
          color: var(--color-primary-focus);
        }
      }
    }
  }
</style>
