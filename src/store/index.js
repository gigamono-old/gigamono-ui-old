import { createStore } from "vuex"
import users from "@/store/modules/users"
import workflows from "@/store/modules/workflows"

// Create store.
export default createStore({
  modules: {
    users,
    workflows,
  },
})
