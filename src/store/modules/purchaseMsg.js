const successfulMsg = {
  namespaced: true,
  state: {
    showPurchaseMsg: true,
  },
  mutations: {
    mutateShowPurchaseMsg(state) {
      state.showPurchaseMsg = !state.showPurchaseMsg;
    },
  }
}

export default successfulMsg