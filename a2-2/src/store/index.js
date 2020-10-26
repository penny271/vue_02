import Vue from "vue";
import Vuex from "vuex";
//Age.vueの処理の塊をimport
import insurance from "./modules/insurance";
import consulting from "./modules/consulting";
import age from "./modules/age";

Vue.use(Vuex);

// export default new Vuex.Store({
const store = new Vuex.Store({
  modules: {
     age,
     insurance,
     consulting,
  },
});

export default store;
