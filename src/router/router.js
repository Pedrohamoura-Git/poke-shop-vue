import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home/Home.vue";
import PokemonInfo from "../views/PokemonInfo/PokemonInfo.vue"
import CartPage from "../views/CartPage/CartPage.vue"
import TypeList from "../views/TypeList/TypeList.vue"

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon-info/:name",
    name: "PokemonInfo",
    component: PokemonInfo,
    props: true
  },
  {
    path: "/cart-page",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/type-list/:selectedType",
    name: "TypeList",
    component: TypeList,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;