<template lang="pug">
#sidebar(v-show="sidebarVisible")
  router-view(name="sidebar")
</template>

<script>
  import { getEmitter } from "@/application/events"
  import { ref } from "vue"

  export default {
    setup() {
      const emitter = getEmitter()
      let sidebarVisible = ref(true)

      emitter.on("toggle-sidebar", () => {
        sidebarVisible.value = !sidebarVisible.value
      })

      return { sidebarVisible }
    },
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    width: 20rem;
    height: 100%;
    background-color: var(--color-bg);
    padding: var(--spacing-gutter-primary);
    padding-left: 0;
    display: flex;
    flex-direction: column;
  }
</style>
