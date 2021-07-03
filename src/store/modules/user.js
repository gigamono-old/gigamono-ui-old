import { getSessionUser } from "@/application/requests/user"

const state = {
  sessionUser: {},
}

const getters = {
  sessionUser: (state) => state.sessionUser,

  profile: (state) => state.sessionUser?.profile,

  details: (state) => state.sessionUser?.preferences?.details,

  focusWorkspaceIndex: (_, getters) => getters.details?.focusWorkspaceIndex,

  workspaces: (_, getters) => getters.details?.workspaces,

  focusWorkspace: (_, getters) => getters.workspaces?.[getters.focusWorkspaceIndex],

  mainShortcuts: (_, getters) => getters.focusWorkspace?.layout.mainShortcuts,

  otherShortcuts: (_, getters) => getters.focusWorkspace?.layout.otherShortcuts,
}

const actions = {
  getSessionUser: async ({ commit }) => {
    try {
      const response = await getSessionUser()
      commit("setSessionUser", response.data.data.sessionUser)
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
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
