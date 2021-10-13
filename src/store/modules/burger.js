const burger = {
  namespaced: true,
  state: {
    burgerIsActive: false,
  },
  mutations: {
    mutateToggleBurger(state) {
      state.burgerIsActive = !state.burgerIsActive;
    }
  },
}

export default burger