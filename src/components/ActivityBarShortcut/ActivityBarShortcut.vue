<template lang="pug">
router-link.bend(:to="route")
  .wrapper(ref="wrapperRef")
    .icon(ref="iconRef")
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
      const iconRef = ref(null)
      const wrapperRef = ref(null)
      const routerPath = computed(() => router.currentRoute.value.path)

      const w = () =>
        watchEffect(() => {
          // If the current route is the same as this element associated route, change styles as appropriate.
          if (routerPath.value.startsWith(route)) {
            // Change to filled icon and change icon color.
            iconRef.value.classList.remove(outlinedIconName)
            iconRef.value.classList.add(filledIconName)
            iconRef.value.style.backgroundColor = "white"
            // Add .highlighted class to .wrapper and change color.
            wrapperRef.value.classList.add("highlighted")
            wrapperRef.value.style.backgroundColor = "var(--color-primary)"
          } else {
            // Change to outline icon and change icon color.
            iconRef.value.classList.add(outlinedIconName)
            iconRef.value.classList.remove(filledIconName)
            iconRef.value.style.backgroundColor = "var(--color-text-5)"
            // Remove .highlighted class to .wrapper and revert color.
            wrapperRef.value.classList.remove("highlighted")
            wrapperRef.value.style.backgroundColor = "initial"
          }
        })

      onMounted(() => {
        // Use outline icon on mount.
        iconRef.value.classList.add(outlinedIconName)
        w()
      })

      return { router, route, iconRef, wrapperRef, routerPath }
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
      border-radius: var(--border-rad-md);

      > .icon {
        width: 1rem;
        height: 1rem;
        box-sizing: inherit;
        background-color: var(--color-text-4);
      }
    }

    // Hover only works on .wrapper child with .highlighed class.
    &:hover > :not([class*="highlighted"]) {
      box-shadow: var(--shadow-primary);
      border: var(--border-bg-part-0) var(--color-bg);
    }
  }
</style>
