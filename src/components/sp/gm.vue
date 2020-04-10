<template>
    <div>
        <transition 
        @before-enter="beforeEnter"
        @enter="Enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballflag" ref="balls"></div>
        </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-swipe :auto="2000">
                            <mt-swipe-item v-for="item in list" :key="item.src">
                                <img :src="item.src" alt=""></mt-swipe-item>
                        </mt-swipe>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{lists.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="content">
                            <p class="price">
                            市场价：<span class="old">￥{{lists.market_price}}</span> &nbsp;&nbsp;销售价：<span class="now">￥{{lists.sell_price}}</span>
                        </p>
                        <p class="gmsl">
                            购买数量：<num @add="add" :max="lists.stock_quantity"></num>
                        </p>
                        <p>
                            <mt-button size="small" type="primary" @click="ballrun">加入购物车</mt-button>
                            <mt-button size="small" type="danger">立即购买</mt-button>
                        </p>
                        </div>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="mui-card-content-inner-xq">
                            <p>商品编号：{{lists.goods_no}}</p>
                            <p>库存情况：{{lists.stock_quantity}}</p>
                            <p>上架时间：{{lists.add_time | time}}</p>
                        </div>
					</div>
				</div>
				<div class="mui-card-footer">
                   <mt-button size="large" type="primary" plain @click="content(id)">图文介绍</mt-button>
                   <p class="fg"></p>
                   <mt-button size="large" type="danger" plain @click="pl(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import num from './num.vue'
export default{
    data:function(){
        return {
            list:[],
            id:this.$route.params.id,
            lists:{},
            ballflag:false,
            cs:1
        }
    },
    created(){
        this.img()
        this.xq()
    },
    methods:{
        img(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message
                }
            })
        },
        xq(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.lists=result.body.message[0]
                }
            })
        },
        content(id){
            this.$router.push({name:'xq',params:{id}})
        },
        pl(id){
            this.$router.push({name:'pl',params:{id}})
        },
        ballrun(){
            this.ballflag=!this.ballflag
            var data={
                id:this.id,
                sl:this.cs,
                selecte:true,
                sj:this.lists.sell_price
            }
            this.$store.commit('sp',data)
        },
        add(add){
            this.cs=add
        },
        beforeEnter(el){
          el.style.transform="translate(0,0)"
        },
        Enter(el,done){
            const badgepositon=document.getElementById('badge').getBoundingClientRect();
            const ballpositon=this.$refs.balls.getBoundingClientRect()
            const x=badgepositon.left-ballpositon.left;
            const y=badgepositon.top-ballpositon.top;
            el.offsetLeft
            el.style.transform=`translate(${x}px,${y}px)`
            el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el){
           this.ballflag=!this.ballflag
        }
    },
    components:{
        num
    }
}
</script>
<style lang="less" scoped>
.mui-card-content-inner{
    padding: 0;
    .mint-swipe{
	height: 200px;
	.mint-swipe-item{
        text-align: center;
        img{
		// width: 100%;
		height: 100%;
	}
    }
    }
    .content{
        padding: 15px;
        .price{
            color: black;
        .old{
            text-decoration: line-through;
            font-size: 10px;
        }
        .now{
            color: red;
            font-size: 16px;
        }
    }
    .gmsl{
        color: black;
    }
    }
    .mui-card-content-inner-xq{
        padding: 5px;
        p{
            padding: 3px;
        }
    }
}
.mui-card-footer{
    .fg{
        height: 50px;
    }
    display: flex;
    flex-wrap: wrap;
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    left: 80px;
    top:385px;
}
</style>