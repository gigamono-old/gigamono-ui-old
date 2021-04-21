const state = {
  workspaceProjectWorkflow: {
    steps: new Map(), // index => step { cursorDropPoint, actualDropPoint }
    highestIndex: -1,
    containerBounds: null, // { x, y, width, height }
  },
}

const getters = {
  workspaceProjectWorkflow: (state) => state.workspaceProjectWorkflow,
}

const actions = {
  addStepToWorkspaceProjectWorkflow: ({ commit, state }, step) => {
    // The new highest index is just an increment of the old highest index.
    const newHighestIndex = state.workspaceProjectWorkflow.highestIndex + 1

    // Commit changes. With the new step associated with new highest index.
    commit("incrementHighestIndex", newHighestIndex)
    commit("addStepToWorkspaceProjectWorkflow", { step, newHighestIndex })
  },
  updateContainerBounds: ({ commit }, newContainerBounds) => {
    commit("updateContainerBounds", newContainerBounds)
  },
}

const mutations = {
  addStepToWorkspaceProjectWorkflow: (state, { step, newHighestIndex }) => {
    state.workspaceProjectWorkflow.steps.set(newHighestIndex, step)
  },
  incrementHighestIndex: (state, newHighestIndex) => {
    state.workspaceProjectWorkflow.highestIndex = newHighestIndex
  },
  updateContainerBounds: (state, newContainerBounds) => {
    state.workspaceProjectWorkflow.containerBounds = newContainerBounds
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
