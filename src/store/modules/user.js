import { getSessionUser } from "@/application/requests/user"

const state = {
  sessionUser: {},
}

const getters = {
  sessionUser: (state) => state.sessionUser,

  profile: (state) => state.sessionUser?.profile,

  integrations: (state) => state.sessionUser?.integrations,

  activityBarMainShortcuts: (state) => state.sessionUser?.session?.layout?.activityBarMainShortcuts,

  activityBarOtherShortcuts: (state) =>
    state.sessionUser?.session?.layout?.activityBarOtherShortcuts,

  focusWorkspaceIndex: (state) => state.sessionUser?.session?.focusWorkspaceIndex,

  focusWorkspace: (state, getters) => state.sessionUser?.workspaces?.[getters.focusWorkspaceIndex],

  focusProjectIndex: (state, getters) =>
    state.sessionUser?.session?.workspaceFocusIndices?.[getters.focusWorkspaceIndex]
      ?.focusProjectIndex,

  focusProject: (_, getters) => getters.focusWorkspace?.projects?.[getters.focusProjectIndex],
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
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
