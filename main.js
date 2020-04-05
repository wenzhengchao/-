import Vue from 'vue';
import vueRouter from 'vue-router';


import App from './App.vue';
import './src/lib/css/mui.min.css'
import './src/lib/css/icons-extra.css'

import {Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'
Vue.use(vueRouter);
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router
})