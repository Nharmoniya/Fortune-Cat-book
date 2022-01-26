import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';



Vue.config.productionTip = false;

//全局导入VueRouter
Vue.component('Nav', Nav);

//引入全局layout
Vue.component('Layout',Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
