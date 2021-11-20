import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: null,
    postOpened: {
      open: false,
      data: null
    }
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
    }
  },
  actions: {
    SOCKET_POSTS(context, payload) {
      context.commit('UPDATE_POSTS', payload);
    },
    SOCKET_POST(context, payload) {
      context.commit('ADD_POST', payload);
    }
  }
});
