<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1" @change="add" ref="add"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				        </div>
    </div>
</template>
<script>
import mui from '../../lib/js/mui.min.js'
export default{
    methods:{
        add(){
            this.$emit('add',parseInt(this.$refs.add.value))
        }
    },
    props:['max'],
    watch:{
        'max':function(newz,oldz){
            mui('.mui-numbox').numbox().setOption('max',newz)
        }
    },
    mounted(){
        mui('.mui-numbox').numbox()
    }
}
</script>
<style lang="less" scoped>

</style>