import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueSocketIO from 'vue-3-socket.io';
import { connect } from 'socket.io-client';

import Loading from '@/components/basics/Loading.vue';

createApp(App)
  .use(store)
  .use(router)
  .use(
    new VueSocketIO({
      debug: true,
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      },
      connection: connect('http://localhost:3000')
    })
  )
  .component('Loading', Loading)
  .mount('#app');
