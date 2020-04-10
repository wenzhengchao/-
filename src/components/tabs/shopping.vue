<template>
    <div>
        <div class="card-item">
            <div class="mui-card" v-for="(item,i) in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.goods[item.id]"
                        @change="selecte(item.id,$store.getters.goods[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div>
                            <h3>{{item.title}}</h3>
                            <p class="price">
                                <span class="red">￥{{item.sell_price}}</span>
                                <num :getsl="$store.getters.num[item.id]" :spid="item.id"></num>
                                <a href="#" @click="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="js">
                            <div class="content">
                            <p>总价格：</p>
                            <p>已购选<span class="red">{{$store.getters.gl}}</span>件，总价：<span class="red">￥{{$store.getters.glq}}</span></p>
                        </div>
                        <mt-button size="small" type="danger">去结算</mt-button>
                        </div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import num from './num.vue'
export default{
  data:function(){
      return {
          list:[]
      }
  },
  created(){
      this.jz()
  },
  methods:{
      jz(){
        var lists=[]
        this.$store.state.list.forEach(item=>{
            lists.push(item.id)
        })
        if(lists.length<=0){
            return
        }
        this.$http.get('api/goods/getshopcarlist/'+lists.join(',')).then(result=>{
            if(result.body.status===0){
                this.list=result.body.message
            }
        })   
      },
      remove(id,index){
          this.list.splice(index,1)
          this.$store.commit('remove',id)
      },
      selecte(id,change){
          this.$store.commit('change',{
              id:id,
              selecte:change
          })
      }
  },
  components:{
      num
  }
} 
</script>
<style lang="less" scoped>
.card-item{
    .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    img{
        width: 60px;
        height: 60px;
    }
    h3{
        font-size: 13px;
    }
    .price{
        .red{
            color:red;
        }
    }
}
.js{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content{
        .red{
            color: red;
        }
    }
}
</style>