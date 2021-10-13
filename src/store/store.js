import {
  createStore
} from "vuex";

import burger from "./modules/burger";
import cart from "./modules/cart";
import sidebar from "./modules/sidebar";
import search from "./modules/search";
import purchaseMsg from "./modules/purchaseMsg"
import typeList from "./modules/typeList";

export default createStore({
  modules: {
    burger,
    cart,
    sidebar,
    search,
    purchaseMsg,
    typeList,
  },
});