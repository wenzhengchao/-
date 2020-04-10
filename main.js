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
import vuex from 'vuex'
Vue.use(vuex)
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;
Vue.use(vueRouter);
Vue.filter('time',function(timedata,formats="YYYY-MM-DD HH:mm:ss"){
    return moment(timedata).format(formats)
})
var get=JSON.parse(localStorage.getItem('car')||'[]')
var store =new vuex.Store({
    state:{
        list:get
    },
    mutations:{
        sp(state,a){
            var flag=true
            state.list.some(item=>{
                if(item.id==a.id){
                    item.sl+=parseInt(a.sl)
                    flag=false
                    return true
                }  
            })
            if(flag){
                state.list.push(a)
            }
            localStorage.setItem('car',JSON.stringify(state.list))
        },
        updata(state,b){
            state.list.some(item=>{
                if(item.id==b.id){
                    item.sl=parseInt(b.sl)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.list))
        },
        change(state,b){
            state.list.some(item=>{
                if(item.id==b.id){
                    item.selecte=b.selecte
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.list))
        },
        remove(state,id){
            state.list.some((item,i)=>{
                if(item.id==id){
                    state.list.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.list))
        }
    },
    getters:{
        hb(state){
            var c=0
            state.list.forEach(item=>{
                c+=item.sl
            })
            return c
        },
        num(state){
            var o={}
            state.list.forEach(item=>{
                o[item.id]=item.sl
            })
            return o
        },
        goods(state){
            var o={}
            state.list.forEach(item=>{
                o[item.id]=item.selecte
            })
            return o
        },
        gl(state){
            var o=[]
            var jianshu=0
            state.list.some(item=>{
                if(item.selecte){
                    o.push(item)
                }
            })
            o.forEach(item=>{
                jianshu+=item.sl
            })
            return jianshu
        },
        glq(state){
            var o=[]
            var jianshu=0
            state.list.some(item=>{
                if(item.selecte){
                    o.push(item)
                }
            })
            o.forEach(item=>{
                jianshu=jianshu+(parseInt(item.sj)*item.sl)
            })
            return jianshu
        }
    }
})
var vm=new Vue({
    el:'#app',
    render:c=>c(App),
    router,
    store
})
