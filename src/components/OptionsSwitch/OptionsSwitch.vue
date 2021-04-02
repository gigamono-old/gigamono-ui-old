<template lang="pug">
ul.options-switch
    li.option(
      v-for="(option, idx) in options",
      :class="{'selected': idx === 0 }"
    ) {{option}}
</template>

<script>
  import { onMounted } from "vue"

  export default {
    props: {
      options: Array,
    },
    setup() {
      onMounted(() => {})
    },
  }
</script>

<style lang="scss" scoped>
  ul.options-switch {
    height: 1.8rem;
    width: var(--spacing-sidebar-element-width);
    margin-top: var(--spacing-sidebar-element-margin);
    background-color: var(--color-bg-5);
    display: flex;
    font-family: var(--font-primary);
    align-items: center;
    font-size: 0.9rem;
    border-radius: var(--border-rad-xl);
    padding: 0.125rem;
    cursor: pointer;

    > li.option {
      height: 100%;
      flex: 1 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-rad-lg);
      color: var(--color-text-4);

      &.selected {
        font-weight: 700;
        background-color: var(--color-bg-7);
        box-shadow: var(--shadow-surround-sharp-down);
      }

      &:hover:not(.selected) {
        background-color: var(--color-bg);
      }

      &:active:not(.selected) {
        color: var(--color-text-0);
        font-weight: 700;
      }

      &:not(:last-of-type) {
        margin-right: 0.25rem;
      }
    }
  }
</style>
