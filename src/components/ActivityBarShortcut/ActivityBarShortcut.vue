<template lang="pug">
router-link.bend(:to="route")
  .wrapper(ref="wrapperElement")
    .icon(ref="iconElement")
</template>

<script>
  import { ref, onMounted, computed, watchEffect } from "vue"
  import router from "@/router"

  export default {
    props: {
      iconName: String,
      route: String,
    },
    setup(props) {
      const route = "/" + props.route
      const filledIconName = `icon-${props.iconName}`
      const outlinedIconName = `${filledIconName}-outline`
      const iconElement = ref(null)
      const wrapperElement = ref(null)
      const routerPath = computed(() => router.currentRoute.value.path)

      const w = () =>
        watchEffect(() => {
          // If the current route is the same as this element associated route, change styles as appropriate.
          if (routerPath.value.startsWith(route)) {
            // Change to filled icon and change icon color.
            iconElement.value.classList.remove(outlinedIconName)
            iconElement.value.classList.add(filledIconName)
            iconElement.value.style.backgroundColor = "white"
            // Add .highlighted class.
            wrapperElement.value.classList.add("highlighted")
          } else {
            // Change to outline icon and change icon color.
            iconElement.value.classList.add(outlinedIconName)
            iconElement.value.classList.remove(filledIconName)
            iconElement.value.style.backgroundColor = "var(--color-text-5)"
            // Remove .highlighted class.
            wrapperElement.value.classList.remove("highlighted")
          }
        })

      onMounted(() => {
        // Use outline icon on mount.
        iconElement.value.classList.add(outlinedIconName)
        w()
      })

      return { router, route, iconElement, wrapperElement, routerPath }
    },
  }
</script>

<style lang="scss" scoped>
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;

    > .wrapper {
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-rad-lg);

      > .icon {
        width: 1rem;
        height: 1rem;
        box-sizing: inherit;
        background-color: var(--color-text-4);
      }

      &.highlighted {
        background-color: var(--color-primary);
        box-shadow: var(--shadow-inset);
      }
    }

    // Hover only works on .wrapper child with .highlighed class.
    &:hover > :not([class*="highlighted"]) {
      box-shadow: var(--shadow-primary);
      border: var(--border-part) var(--color-bg);
    }
  }
</style>
