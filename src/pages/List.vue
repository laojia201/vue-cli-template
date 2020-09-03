<template>
  <div class="list">
    <div class="list-top">
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="搜索"
        @select="handleSelect"
        size="mini"
      >
        <i
          class="el-icon-search el-input__icon"
          style="cursor:pointer"
          slot="prefix"
          @click="handleIconClick"
        ></i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
    </div>

    <div class="list-content">
      
      <component :is="showListTab"></component>
    </div>
  </div>
</template>

<script>
import talklist from "./listContents/TalkList";
import cumslist from "./listContents/CumsList";
import historylist from "./listContents/HistoryList";
import tagslist from "./listContents/TagsList";
import setlist from "./listContents/SetList";

export default {
  name: "List",
  data() {
    return {
      state: "",
      restaurants: [],
      
      
      showListTab: "talklist"
    };
  },
  components: {
    talklist,
    cumslist,
    historylist,
    tagslist,
    setlist
  },
  methods: {
    // 头部搜索
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      cb(results);
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick() {},
    
  },
  watch: {
    "$store.state.navs"(val) {
      switch (val) {
        case 1:
          this.showListTab = "talklist";
          break;
        case 2:
          this.showListTab = "cumslist";
          break;
        case 3:
          this.showListTab = "historylist";
          break;
        case 4:
          this.showListTab = "tagslist";
          break;
        case 5:
          this.showListTab = "setlist";
          break;
      }
    }
  }
};
</script>

<style scoped>
.list {
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #dee0e3;
  display: flex;
  flex-direction: column;
}
.list-top {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-content {
  flex: 1;
  overflow: auto;
}
</style>