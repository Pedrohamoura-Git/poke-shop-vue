const sidebar = {
  namespaced: true,
  state: {
    showSidebar: false,
  },
  mutations: {
    mutateShowSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  }
}

export default sidebar