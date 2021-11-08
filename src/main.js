import Vue from 'vue';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import config from '@/config/defaultSettings';
import VueStorage from 'vue-ls';
import './plugins/antdesign';
import './permission';
import i18n from './lang';// i18n
import bootstrap from './core/bootstrap'
import * as filters from './filters';


Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.use(VueStorage, config.storageOptions)
new Vue({
  router,
  store,
  i18n,
  created: bootstrap, //初始配置
  render: h => h(App)
}).$mount('#app')
