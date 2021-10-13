const cart = {
  namespaced: true,
  state: {
    showCartPopup: false,
    allCartItems: [],
  },
  mutations: {
    mutateShowCartPopup(state) {
      state.showCartPopup = !state.showCartPopup;
    },
    mutateAllCartItems(state, allItems) {
      state.allCartItems = allItems;
    },
    mutateAddCartItem(state, item) {
      state.allCartItems.push(item);
    },
    mutateRemoveCartItem(state, index) {
      state.allCartItems.splice(index, 1)
    },
    mutateRemoveAllCartItems(state) {
      state.allCartItems = []
    },
    mutateItemQuant(state, update) {
      state.allCartItems[update.index].quant = update.quant;
    },
    mutateTotalPrice(state, update) {
      state.allCartItems[update.index].totalPrice = update.newTotalPrice;
    },
  }
}

export default cart