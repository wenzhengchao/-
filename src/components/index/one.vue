<template>
    <div class="news">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/index/news/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | time}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            list:[]
        }
    },
    created(){
        this.new()
    },
    methods:{
        new(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.news{
    .mui-table-view{
        .mui-table-view-cell{
            img{
                width: 80px;
                height: 50px;
            }
            h1{
                font-size: 14px;
            }
            p{
                font-size: 13px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>