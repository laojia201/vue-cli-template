<template>
    <div class="parents">
        <div class="parents-left">
            <left></left>
        </div>
        <div class="parents-list">
            <list></list>
        </div>
        <div class="parents-message">
            <messages></messages>
        </div>
    </div>
</template>

<script>
import left from "./Left";
import list from "./List";
import messages from "./Messages";
import right from "./Right";

export default {
    name:"BoxShow",
    components:{
        left,
        list,
        messages,
        right
    }
};
</script>

<style scoped>

.parents{
    display: flex;
    width: 100%;
    height: 100%;
    
}
.parents-left{
    width: 60px;
    flex-shrink: 0;
}
.parents-list{
    width: 292px;
    flex-shrink: 0;
}
.parents-message{
    flex: 1;
}

</style>