import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import VueRouter from 'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.esm.browser.js'
Vue.use(VueRouter)

import home from './views/home.js'
import channels from './views/channels.js'
import login from './views/login.js'

export const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: "home",
            path: '/',
            component: home
        },
        {
            name: "channels",
            path: '/channels/:name',
            component: channels
        },
        {
            name: "login",
            path: '/login',
            component: login
        }
    ]
});