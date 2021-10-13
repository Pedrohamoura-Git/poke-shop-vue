const search = {
  namespaced: true,
  state: {
    showSearchInput: false,
  },
  mutations: {
    mutateShowSearchInput(state) {
      state.showSearchInput = !state.showSearchInput;
    },
  }
}

export default search