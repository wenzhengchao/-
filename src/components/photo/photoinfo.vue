<template>
    <div class="photo-container">
        <h3>{{list.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{list.add_time | time}}</span>
            <span>点击{{list.click}}次</span>
        </p>
        <hr>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <div class="content" v-html="list.content"></div>
        <pinglun :id="id"></pinglun>
    </div>
</template>
<script>
import pinglun from '../index/pinglun.vue'
export default{
    data:function(){
        return {
            id:this.$route.params.id,
            list:{},
            slide1: []
        }
    },
    created(){
        this.imginfo()
        this.img()
    },
    methods:{
        imginfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
            if(result.body.status===0){
                this.list=result.body.message[0]
            }
        })
        },
        handleClose(){
            console.log('nn')
        },
        img(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(item=>{
                        item.w=600;
                        item.h=400;
                        item.msrc=item.src
                    })
                    this.slide1=result.body.message
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
.photo-container{
    padding: 3px;
    h3{
        color: #26A2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px;
    }
    .subtitle{
        display:flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>