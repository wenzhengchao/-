<template>
    <div class="sp-list">
        <router-link class="sp-item" v-for="item in list" :key="item.id" :to="'/index/gm/'+item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <div class="jg">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span> 
                </div>
                <div class="xsqk">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </div>
            </div>
        </router-link>
        <mt-button size="large" type="danger" plain @click="add">加载更多</mt-button>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            index:1,
            list:[]
        }
    },
    created(){
        this.splb()
    },
    methods:{
        splb(){
            this.$http.get('api/getgoods?pageindex='+this.index).then(result=>{
                if(result.body.status===0){
                    this.list=this.list.concat(result.body.message)
                }
            })
        },
        add(){
            this.index=this.index+1
            this.splb()
        }
    }
}
</script>
<style lang="less" scoped>
.sp-list{
    padding: 7px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sp-item{
        margin: 4px 0;
        padding: 2px;
        width: 49%;
        border: 1px solid #fff;
        box-shadow: 0 0 8px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        img{
            width: 100%;
        }
        h1{
            font-size: 14px;
            margin: 0;
            padding: 5px;
        }
        .info{
            .jg{
                .new{ 
                    font-size: 15px;
                    color: red;
                    margin-left: 3px;
                    margin-right: 10px;
                }
                .old{
                    color: #ccc;
                    font-size: 11px;
                    text-decoration: line-through;
                }
            }
            .xsqk{
                color: #ccc;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>