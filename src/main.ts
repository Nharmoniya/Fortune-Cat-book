import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {taglistmodel} from '@/models/taglistmodel';

Vue.config.productionTip = false;

//全局导入VueRouter
Vue.component('Nav', Nav);
//引入全局layout
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = taglistmodel.fetch();
window.createTag=(name:string)=>{
    const message = taglistmodel.create(name)
    if (message === 'duplicated') {
      window.alert('标签名重复了');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
