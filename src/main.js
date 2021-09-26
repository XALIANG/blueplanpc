import Vue from 'vue';
import 'normalize.css/normalize.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/antdesign';
import './permission';
import i18n from './lang';// i18n

import * as filters from './filters'; 

Vue.config.productionTip = false;


console.log(process.env)  
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
