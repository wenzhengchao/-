<template>
    <div>
        
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="item in list" :key="item.id" @click="img(item.id)">
							{{item.title}}
						</a>				
					</div>
				</div>
		</div>

		<ul class="photoul">
  			<router-link tag="li" v-for="item in lists" :key="item.id" :to="'/index/photoinfo/'+item.id">
    			<img v-lazy="item.img_url">
				<div class="wz">
					<div class="wz-title">{{item.title}}</div>
					<div class="wz-body">{{item.zhaiyao}}</div>
				</div>
  			</router-link>
		</ul>
    </div>
</template>
<script>
import mui from '../../lib/js/mui.min.js'
export default{
    data:function(){
        return {
			list:[],
			lists:[]
        }
	},
	created(){
		this.title()
		this.img(0)
	},
    methods:{
		title(){
			this.$http.get('api/getimgcategory').then(result=>{
				if(result.body.status===0){
					this.list=result.body.message
					var add={
						title:'全部',
						id:0
					}
					this.list.unshift(add)
				}
			})
		},
		img(id){
			this.$http.get('api/getimages/'+id).then(result=>{
				if(result.body.status===0){
					this.lists=result.body.message
				}
			})
		}
	},
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	}
}
</script>
<style lang="less" scoped>
*{
	touch-action: pan-y;
}
.photoul{
	margin: 0;
	padding: 13px;
	padding-bottom: 0;
	li{
		background-color: #ccc;
		margin-bottom: 10px;
		text-align: center;
		box-shadow: 0 0 9px #999;
		position: relative;
		img{
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
		}
		.wz{
			text-align: left;
			max-height: 86px;
			position: absolute;
			bottom: 0;
			color: white;
			background-color: rgba(0, 0, 0, 0.4);
			.wz-title{
				font-size: 14px;
			}
			.wz-body{
				font-size: 13px;
			}
		}
	}
}
</style>