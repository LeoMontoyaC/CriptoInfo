import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from '@/router';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");