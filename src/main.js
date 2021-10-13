import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";


import AnimateCSS from 'animate.css';

createApp(App).use(store).use(router).use(AnimateCSS).
mount("#app");