import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: null,
    postOpened: {
      open: false,
      data: null,
    },
  },
  mutations: {
    UPDATE_POST(state, payload) {
      state.postOpened = payload;
    },
    UPDATE_POSTS(state, payload) {
      state.posts = payload;
    },
    ADD_POST(state, payload) {
      state.posts.unshift(payload);
    },
  },
  actions: {
    SOCKET_POSTS(context, payload) {
      context.commit("UPDATE_POSTS", payload);
    },
    SOCKET_POST(context, payload) {
      context.commit("ADD_POST", payload);
    },
  },
});
