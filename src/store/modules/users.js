import { getSessionUser } from "@/requests/user"

const state = {
  sessionUser: {},
}

const getters = {
  sessionUser: (state) => state.sessionUser,
  activityBarMainShortcuts: (state) =>
    state.sessionUser?.session?.layoutPreferences?.activityBarMainShortcuts,
  activityBarOtherShortcuts: (state) =>
    state.sessionUser?.session?.layoutPreferences?.activityBarOtherShortcuts,
  sessionIntegrations: (state) => state.sessionUser?.session?.integrations,
  focusWorkspace: (state) => {
    const index = state.sessionUser?.session?.focusWorkspaceIndex
    return state.sessionUser?.session?.workspaces?.[index]
  },
  focusProject: (_, getters) => {
    const index = getters.focusWorkspace?.focusProjectIndex
    return getters.focusWorkspace?.projects?.[index]
  },
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
