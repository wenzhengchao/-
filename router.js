import vueRouter from 'vue-router';
import index from './src/components/tabs/index.vue'
import huiyuan from './src/components/tabs/huiyuan.vue'
import shopping from './src/components/tabs/shopping.vue'
import search from './src/components/tabs/search.vue'
import one from './src/components/index/one.vue'
import news from './src/components/index/news.vue'
import photo from './src/components/photo/photo.vue'
import photoinfo from './src/components/photo/photoinfo.vue'
import sp from './src/components/sp/sp.vue'
import gm from './src/components/sp/gm.vue'
import xq from './src/components/sp/xq.vue'
import pl from './src/components/sp/pl.vue'

var router=new vueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/huiyuan',component:huiyuan},
        {path:'/shopping',component:shopping},
        {path:'/search',component:search},
        {path:'/index/one',component:one},
        {path:'/index/news/:id',component:news},
        {path:'/index/photo',component:photo},
        {path:'/index/photoinfo/:id',component:photoinfo},
        {path:'/index/sp',component:sp},
        {path:'/index/gm/:id',component:gm},
        {path:'/index/xq/:id',component:xq,name:'xq'},
        {path:'/index/pl/:id',component:pl,name:'pl'},
    ],
    linkActiveClass:'mui-active'
})
export default router