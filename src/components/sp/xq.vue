<template>
    <div class="xq-container">
        <h3>{{list.title}}</h3>
        <hr>
        <div class="content" v-html="list.content"></div>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            id:this.$route.params.id,
            list:{}
        }
    },
    created(){
        this.getxq()
    },
    methods:{
        getxq(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message[0]
                }
            })
        }
    }
}
</script>
<style lang="less">
.xq-container{
    padding: 4px;
    h3{
        font-size: 16px;
        text-align: center;
        color: #226aff;
        margin: 15px;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>