import { createStore } from "vuex"
import user from "@/store/modules/user"

// Create store.
export default createStore({
  modules: {
    user,
  },
})
