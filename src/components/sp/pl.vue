<template>
    <div>
        <pinglun :id="id"></pinglun>
    </div>
</template>
<script>
import pinglun from '../index/pinglun.vue'
export default{
    data:function(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        pinglun
    }
}
</script>
<style lang="less" scoped>

</style>