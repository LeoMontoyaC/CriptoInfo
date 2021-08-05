import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "./router";
import { dollarFilter } from "@/filters";
import { percentFilter } from "./filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTipimport = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
