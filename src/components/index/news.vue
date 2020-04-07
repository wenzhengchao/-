<template>
    <div class="new-container">
        <h3 class="title">{{list.title}}</h3>
        <p class="btn">
            <span>发表时间：{{list.add_time |time}}</span>
            <span>点击{{list.click}}次</span>
        </p>
        <hr>
        <div v-html="list.content"></div>
        <pinglun :id="id"></pinglun>
    </div>
</template>
<script>
import pinglun from './pinglun.vue'
export default{
    data:function(){
        return {
            id:this.$route.params.id,
            list:{}
        }
    },
    created(){
        this.news()
    },
    methods:{
        news(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message[0]
                }
            })
        }
    },
    components:{
        pinglun
    }
}
</script>
<style lang="less" scoped>
.new-container{
    .title{
        text-align:center;
        font-size: 16px;
        color: red;

    }
    .btn{
        display: flex;
        justify-content: space-between;
    }
}
</style>