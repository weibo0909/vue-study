import Vue from 'vue';
import VueRouter from 'vue-router';
import Root from '../views/Root.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Root',
        component: Root,
        children: [{
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },{
            path: '/a',
            name: 'A',
            component: () => import('../views/A.vue')
        }, {
            path: '/b',
            name: 'B',
            component: () => import('../views/B.vue')
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
