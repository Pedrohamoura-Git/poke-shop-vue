const typeList = {
  namespaced: true,
  state: {
    selectedType: '',
    nameToFilter: '',
  },
  mutations: {
    mutateNameToFilter(state, name) {
      state.nameToFilter = name
    },
    mutateSelectedType(state, type) {
      state.selectedType = type
    },
  }
}

export default typeList