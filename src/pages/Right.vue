<template>
    <div class="right">
        <!-- <div class="right-tabs">
            <div class="right-tabs-top"></div>
            <div class="right-tabs-content"></div>
        </div> -->
        <div class="right-nav">
            <img v-for="(item, val) in icons" :key="val" :src="item" @click="setTab(val)">
        </div>
        
        
    </div>
</template>

<script>

export default {
    name:"right",
    data(){
        return {
            icons:{
                top1:require("../assets/icons/messages/right1.png"),
                top2:require("../assets/icons/messages/right2.png"),
                top3:require("../assets/icons/messages/right3.png"),
                top4:require("../assets/icons/messages/right4.png"),
                top5:require("../assets/icons/messages/right5.png"),
            }
        }
    },
    methods:{
        setTab(data){
            let a = 0;
            switch(data){
                case "top1": console.log(1); break;
                case "top2": console.log(2); break;
                case "top3": console.log(3); break;
                case "top4": console.log(4); break;
                case "top5": console.log(5); break;
                default: break;
            }
        },
    }
};
</script>

<style scoped>
.right{
    height: 100%;
    box-sizing: border-box;
    background: #F5F6F7;
    display: flex;

}
.right .right-nav{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right .right-nav img{
    width: 18px;
    height: 21px;
    margin: 26px 0;
    cursor: pointer;
}

.right-tabs-top{
    height: 70px;
    border: 1px solid #dee0e3;
}

</style>