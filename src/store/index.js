import { createStore } from "vuex"
import user from "@/store/modules/user"
import workflow from "@/store/modules/workflow"

// Create store.
export default createStore({
  modules: {
    user,
    workflow,
  },
})
