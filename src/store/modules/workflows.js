const state = {
  currentWorkflow: {
    steps: new Map(), // index => step { cursorDropPoint, actualDropPoint }
    highestIndex: -1,
    containerBounds: null, // { x, y, width, height }
  },
}

const getters = {
  currentWorkflow: (state) => state.currentWorkflow,
}

const actions = {
  addStepToCurrentWorkflow: ({ commit, state }, step) => {
    // The new highest index is just an increment of the old highest index.
    const newHighestIndex = state.currentWorkflow.highestIndex + 1

    // Commit changes. With the new step associated with new highest index.
    commit("incrementHighestIndex", newHighestIndex)
    commit("addStepToCurrentWorkflow", { step, newHighestIndex })
  },
  updateContainerBounds: ({ commit }, newContainerBounds) => {
    commit("updateContainerBounds", newContainerBounds)
  },
}

const mutations = {
  addStepToCurrentWorkflow: (state, { step, newHighestIndex }) => {
    state.currentWorkflow.steps.set(newHighestIndex, step)
  },
  incrementHighestIndex: (state, newHighestIndex) => {
    state.currentWorkflow.highestIndex = newHighestIndex
  },
  updateContainerBounds: (state, newContainerBounds) => {
    state.currentWorkflow.containerBounds = newContainerBounds
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
