import Vue from 'vue';
import vueRouter from 'vue-router';
import resource from 'vue-resource'
Vue.use(resource)
import moment from 'moment'

import App from './App.vue';
import './src/lib/css/mui.min.css'
import './src/lib/css/icons-extra.css'
import vuePreview from 'vue-preview'
Vue.use(vuePreview)
// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import mintui from 'mint-ui';
Vue.use(mintui);
import 'mint-ui/lib/style.css'

import router from './router.js'
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;
Vue.use(vueRouter);
Vue.filter('time',function(timedata,formats="YYYY-MM-DD HH:mm:ss"){
    return moment(timedata).format(formats)
})
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router,
})
