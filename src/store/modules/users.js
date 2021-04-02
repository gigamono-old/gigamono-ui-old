import { getCurrentUser } from "../requests/user"

const state = {
  currentUser: {},
}

const getters = {
  currentUser: (state) => state.currentUser,
}

const actions = {
  getCurrentUser: async ({ commit }) => {
    try {
      const response = await getCurrentUser()
      commit("setCurrentUser", response.data.data.getCurrentUser)
    } catch (error) {
      console.error("Error trying to get user data!", error)
    }
  },
}

const mutations = {
  setCurrentUser: (state, payload) => {
    state.currentUser = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
