import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './globalCompontents';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$store = store;

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
