import Vue from 'vue';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import Socketio from "vue-socket.io";
import SocketIO from 'socket.io-client'
import config from '@/config/defaultSettings';
import VueStorage from 'vue-ls';
import './plugins/antdesign';
import './permission';
import i18n from './lang';// i18n
import bootstrap from './core/bootstrap'
import * as filters from './filters';
import { WebSocket } from "@/components/index"

Vue.config.productionTip = false;
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.use(VueStorage, config.storageOptions)
Vue.use(new Socketio({
  debug: true,
  connection: "localhost:9090"
}))
Vue.component("WebSocket", WebSocket)
new Vue({
  router,
  store,
  i18n,
  created: bootstrap, //初始配置
  render: h => h(App)
}).$mount('#app')
