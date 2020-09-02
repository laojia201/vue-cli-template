<template>
  <div class="tab">
    <div class="tab-tabs">
      <div class="tab-tabs-top">
        <p>{{$store.state.talkTitle}}</p>
      </div>
      <div class="tab-tabs-content">
        <div class="tab-tabs-content-top">
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
        <div class="tab-tabs-content-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabShow",
  data() {
    return {
      state: "",
      restaurants: [],      
    };
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
    
  }
};
</script>

<style scoped>
.tab {
  border-left: 1px solid #dee0e3;
}
.tab-tabs {
  height: 100%;
  overflow: hidden;
}
.tab-tabs-top {
  text-align: center;
  border-bottom: 1px solid #dee0e3;

  box-sizing: border-box;
  margin-top: 17px;
}
.tab-tabs-top p {
  text-align: center;
  padding: 7px 0;
}
.tab-tabs-content-top {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-tabs-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tab-tabs-content-content {
  flex: 1;
  overflow: auto;
  padding: 0 20px;
  box-sizing: border-box;
}

</style>