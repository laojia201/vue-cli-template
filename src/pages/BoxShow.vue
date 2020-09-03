<template>
    <div class="parents">
        <div class="parents-left">
            <left></left>
        </div>
        <div class="parents-list">
            <list></list>
        </div>
        <div class="parents-message">
            <component :is="toShowTab"></component>
        </div>
    </div>
</template>

<script>
import left from "./Left";
import list from "./List";
import messages from "./Messages";
import cumsPage from "./CumsPage";
import historyTab from "./HistoryTab";
import tagsPage from "./TagsPage";
import setPage from "./SetPage";
import right from "./Right";

export default {
    name:"BoxShow",
    components:{
        left,
        list,
        messages,
        right,
        cumsPage,
        historyTab,
        tagsPage,
        setPage
    },
    data(){
        return {
            toShowTab:"messages"
        }
    },
    watch:{
        "$store.state.navs"(val){
            switch(val){
                case 1:this.toShowTab = "messages";break;
                case 2:this.toShowTab = "cumsPage";break;
                case 3:this.toShowTab = "historyTab";break;
                case 4:this.toShowTab = "tagsPage";break;
                case 5:this.toShowTab = "setPage";break;
            }
        }
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