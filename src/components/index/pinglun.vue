<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请评论" v-model="mit"></textarea>
        <mt-button size="large" type="primary" @click="fb">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in list" :key="item.add_time">
                <div class="cmt-title">第{{i+1}}楼{{item.user_name}}{{item.add_time | time}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button size="large" type="danger" plain @click="add">加载更多</mt-button>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            index:1,
            list:[],
            mit:''
        }
    },
    created(){
        this.pl()
    },
    methods:{
        pl(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.index).then(result=>{
                if(result.body.status===0){
                    this.list=this.list.concat(result.body.message)
                }
            })
        },
        add(){
            this.index=this.index+1
            this.pl()
        },
        fb(){
            this.$http.post('api/postcomment/'+this.id,{
                "content":this.mit
            }).then(result=>{
                if(result.body.status===0){
                    var tj={
                        user_name:'用户',
                        add_time:Date.now(),
                        content:this.mit
                    }
                    this.list.unshift(tj)
                    this.mit=''
                }
            })
        }
    },
    props:['id']
}
</script>
<style lang="less" scoped>
.cmt-list{
    padding: 5px 0;
    .cmt-item{
        .cmt-title{
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            background-color: #c0c0c0
        }
        .cmt-body{
            font-size: 14px;
            height: 30px;
            line-height:30px;
        }
    }
}
</style>