import vueRouter from 'vue-router';
import index from './src/components/tabs/index.vue'
import huiyuan from './src/components/tabs/huiyuan.vue'
import shopping from './src/components/tabs/shopping.vue'
import search from './src/components/tabs/search.vue'
var router=new vueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/huiyuan',component:huiyuan},
        {path:'/shopping',component:shopping},
        {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'
})
export default router