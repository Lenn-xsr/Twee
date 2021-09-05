import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "@/components/Loading.vue";
import VueSocketIO from "vue-socket.io";
import { connect } from "socket.io-client";

const SocketInstance = connect("http://localhost:3000");

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
    connection: SocketInstance,
  })
);

Vue.component("Loading", Loading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
