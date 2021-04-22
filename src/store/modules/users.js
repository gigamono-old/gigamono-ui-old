import { getSessionUser } from "@/requests/user"

const state = {
  sessionUser: {},
}

const getters = {
  sessionUser: (state) => state.sessionUser,
}

const actions = {
  getSessionUser: async ({ commit }) => {
    try {
      const response = await getSessionUser()
      commit("setSessionUser", response.data.data.getSessionUser)
    } catch (error) {
      console.error("Error trying to get user data!", error)
    }
  },
}

const mutations = {
  setSessionUser: (state, newUser) => {
    state.sessionUser = newUser
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
