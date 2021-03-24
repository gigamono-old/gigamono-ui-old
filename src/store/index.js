import { createStore } from "vuex"
import users from "@/store/modules/users"

// Create store.
export default createStore({
  modules: {
    users,
  },
})
