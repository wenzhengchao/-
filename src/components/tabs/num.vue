<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:20px">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" :value="getsl" @change="add" ref="add"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				        </div>
    </div>
</template>
<script>
import mui from '../../lib/js/mui.min.js'
export default{
    methods:{
        add(){
            var a={
                id:this.spid,
                sl:this.$refs.add.value
            }
            this.$store.commit('updata',a)
            
        }
    },
    mounted(){
        mui('.mui-numbox').numbox()
        // console.log(this.$refs.add.value,this.spid)
    },
    props:['getsl','spid']
}
</script>
<style lang="less" scoped>

</style>