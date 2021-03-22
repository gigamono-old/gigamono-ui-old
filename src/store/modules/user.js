import axios from "axios"

const state = {
  user: {},
}

const getters = {
  user: (state) => state.user,
}

const actions = {
  fetchUser: async ({ commit }) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users/1")
    commit("setUser", response.data)
  },
}

const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
