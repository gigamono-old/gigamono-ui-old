import { getCurrentUser, getCurrentUserIntegrations } from "@/requests/user"

const state = {
  currentUser: {},
  currentUserIntegrations: {},
}

const getters = {
  currentUser: (state) => state.currentUser,
  currentUserIntegrations: (state) => state.currentUserIntegrations,
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
  getCurrentUserIntegrations: async ({ commit }) => {
    try {
      const response = await getCurrentUserIntegrations()
      commit("setCurrentUserIntegrations", response.data.data.getCurrentUserIntegrations)
    } catch (error) {
      console.error("Error trying to get user integrations!", error)
    }
  },
}

const mutations = {
  setCurrentUser: (state, payload) => {
    state.currentUser = payload
  },
  setCurrentUserIntegrations: (state, payload) => {
    state.currentUserIntegrations = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
