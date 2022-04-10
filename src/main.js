import Vue from 'vue';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import Socketio from 'vue-socket.io';
import config from '@/config/defaultSettings';
import VueStorage from 'vue-ls';
import './plugins/antdesign';
import './permission';
import i18n from './lang'; // i18n
import bootstrap from './core/bootstrap';
import * as filters from './filters';
import WbeSocket from './components/Socket/index';
import { uuid } from './utils/index';
import highlight from '@/plugins/highlight';

Vue.config.productionTip = false;
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
Vue.use(highlight);
Vue.use(VueStorage, config.storageOptions);
Vue.use(
  new Socketio({
    debug: false,
    connection: `${process.env.VUE_APP_SOCKET_API}?userId=${store.getters.userForm.userId}`
  })
);
Vue.use(WbeSocket);

window.addEventListener('beforeunload', function(e) {
  //窗口关闭前  干掉 socekt 模块
  return (e.returnValue = '确认要关闭当前窗口？');
});

new Vue({
  router,
  store,
  i18n,
  created: bootstrap, //初始配置
  render: (h) => h(App)
}).$mount('#app');
