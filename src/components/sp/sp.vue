<template>
    <div class="sp-list">
        <div class="sp-item">
            <img src="http://localhost:3000/src/img/1.jpg" alt="">
            <h1 class="title">哈哈哈</h1>
            <div class="info">
                <div class="jg">
                    <span class="new">$888</span>
                    <span class="old">$999</span>
                </div>
                <div class="xsqk">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </div>
        <div class="sp-item">
            <img src="http://localhost:3000/src/img/2.jpg" alt="">
            <h1 class="title">哈哈哈</h1>
            <div class="info">
                <div class="jg">
                    <span class="new">$888</span>
                    <span class="old">$999</span>
                </div>
                <div class="xsqk">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </div>
        <div class="sp-item">
            <img src="http://localhost:3000/src/img/3.jpg" alt="">
            <h1 class="title">哈哈哈</h1>
            <div class="info">
                <div class="jg">
                    <span class="new">$888</span>
                    <span class="old">$999</span>
                </div>
                <div class="xsqk">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.sp-list{
    padding: 7px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sp-item{
        margin: 4px 0;
        padding: 2px;
        width: 49%;
        border: 1px solid #fff;
        box-shadow: 0 0 8px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        img{
            width: 100%;
        }
        h1{
            font-size: 14px;
            margin: 0;
            padding: 5px;
        }
        .info{
            .jg{
                .new{ 
                    font-size: 15px;
                    color: red;
                    margin-left: 3px;
                    margin-right: 10px;
                }
                .old{
                    color: #ccc;
                    font-size: 11px;
                    text-decoration: line-through;
                }
            }
            .xsqk{
                color: #ccc;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>