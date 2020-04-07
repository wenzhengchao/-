import vueRouter from 'vue-router';
import index from './src/components/tabs/index.vue'
import huiyuan from './src/components/tabs/huiyuan.vue'
import shopping from './src/components/tabs/shopping.vue'
import search from './src/components/tabs/search.vue'
import one from './src/components/index/one.vue'
import news from './src/components/index/news.vue'
var router=new vueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/huiyuan',component:huiyuan},
        {path:'/shopping',component:shopping},
        {path:'/search',component:search},
        {path:'/index/one',component:one},
        {path:'/index/news/:id',component:news},
    ],
    linkActiveClass:'mui-active'
})
export default router