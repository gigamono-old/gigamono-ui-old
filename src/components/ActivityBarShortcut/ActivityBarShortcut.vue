<template lang="pug">
a
  .icon(:class="cls")
</template>

<script>
  export default {
    props: {
      type: String,
      iconName: String,
    },
    setup(props) {
      const cls = { [`icon-${props.iconName}`]: true }
      return { cls }
    },
  }
</script>

<style lang="scss" scoped>
  a {
    width: 1.8rem;
    height: 1.8rem;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 1.2rem;
      height: 1.2rem;
      box-sizing: inherit;
    }
  }
</style>
