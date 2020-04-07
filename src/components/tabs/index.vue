<template>
    <div>
  <mt-swipe :auto="2000">
    <mt-swipe-item v-for="item in list" :key="item.id">
		<img :src="item.url" alt=""></mt-swipe-item>
  </mt-swipe>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						<router-link to="/index/one">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
    </div>
</template>
<script>
export default{
	data:function(){
		return {
			list:[
				{url:'http://localhost:3000/src/img/1.jpg',id:1},
				{url:'http://localhost:3000/src/img/2.jpg',id:2},
				{url:'http://localhost:3000/src/img/3.jpg',id:3}
			]
		}
	},
	// created(){
	// 	this.img()
	// },
	// methods:{
	// 	img(){
	// 		this.$http.get('api/getlunbo').then(result=>{
	// 			if(result.body.status===0) {
	// 				this.list=result.body.message;
	// 			}
	// 		}
	// 		)
	// 	}
	// }
}
</script>
<style lang="less" scoped>
.mint-swipe{
	height: 200px;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>