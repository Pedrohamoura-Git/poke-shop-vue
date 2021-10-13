const successfulMsg = {
  namespaced: true,
  state: {
    showPurchaseMsg: false,
  },
  mutations: {
    mutateShowPurchaseMsg(state) {
      state.showPurchaseMsg = !state.showPurchaseMsg;
    },
  }
}

export default successfulMsg