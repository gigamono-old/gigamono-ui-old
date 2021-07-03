<template lang="pug">
.grid-list

  .title {{ title }}

  ul.list
    li(v-for="item in list")
      .img-wrapper
        img(v-if="!isSVG", :src="item.avatarURL")
        svg(v-else)
          use(:href="`${item.avatarURL}#${item.name.toLowerCase()}`")

      .integration-name {{ item.name }}
</template>

<script>
  export default {
    props: {
      title: String,
      list: Array,
      isSVG: {
        type: Boolean,
        default: false,
      },
    },
    setup() {},
  }
</script>

<style lang="scss" scoped>
  .grid-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--color-bg-7);
    padding: var(--spacing-step-card-element-margin) 0;
    border-radius: var(--border-rad-xl);

    > .title {
      font-size: 0.8375rem;
      font-weight: 600;
      color: var(--color-text-4);
    }

    > ul.list {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr)); // Can't use just 1fr; its min is auto.
      column-gap: 0.125rem;
      row-gap: 2rem;
      margin-top: calc(var(--spacing-step-card-element-margin) * 2);
      width: 20.5rem;

      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 5rem;
        cursor: pointer;

        > .img-wrapper {
          padding: 0.625rem 0.6rem;
          width: fit-content;
          border-radius: var(--border-rad-xl);
          border: var(--border-part) var(--color-bg);
          user-select: none;
          background-color: var(--color-bg-8);

          > img {
            width: 2rem;
            height: 2rem;
            border-radius: var(--border-rad-lg);
          }

          > svg {
            width: 2rem;
            height: 2rem;
            fill: var(--color-text);
            border-radius: var(--border-rad-lg);
          }
        }

        > .integration-name {
          margin-top: 0.25rem;
          font-size: 0.6875rem;
          text-align: center;
          color: var(--color-text-4);
        }

        &:hover {
          > .img-wrapper {
            box-shadow: var(--shadow-primary-blur-2);
          }

          > .integration-name {
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
