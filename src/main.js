import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import VueScrollTo from "vue-scrollto";
import "./element-component-variables.scss";

Vue.use(Element);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
