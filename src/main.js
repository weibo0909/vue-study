import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/App.scss';
import './globalCompontents';
import api from '../src/request/api' // 导入api接口

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$api = api; // 将api挂载到vue的原型上


router.beforeEach((to, form, next) => {
    if (store.state?.userInfo || to.path === '/login') {
        next();
    } else {
        next({path: '/login'});
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
