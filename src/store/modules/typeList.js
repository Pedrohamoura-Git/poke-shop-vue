const typeList = {
  namespaced: true,
  state: {
    selectedType: '',
    nameToFilter: '',
    nameNotFound: false,
  },
  mutations: {
    mutateNameToFilter(state, name) {
      state.nameToFilter = name
    },
    mutateNameNotFound(state, value) {
      state.nameNotFound = value
    },
    mutateSelectedType(state, type) {
      state.selectedType = type
    },
  }
}

export default typeList