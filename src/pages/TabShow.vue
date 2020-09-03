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
            <i
              :class="$store.state.tabFlag == 5?'el-icon-date el-input__icon':''"
              style="cursor:pointer"
              slot="suffix"
              @click="handleIconClick1"
              ref="iconColor"
            ></i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
          <div class="block" v-show="$store.state.tabFlag == 5 &&  showDataSelect">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
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
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      showDataSelect: false
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
    // 搜索栏设置
    handleIconClick1(){
      this.showDataSelect = !this.showDataSelect;
      if(this.showDataSelect){
        this.$refs.iconColor.style.color = "blue"
      }else{
        this.$refs.iconColor.style.color = "#999"
      }
    },
  },
  created(){
    //  this.$refs.iconColor.style.color = "#999"
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
.block {
  position: absolute;
  top: 127px;
  width: 310px;
}
.block > div {
  width: 100%;
  box-sizing: border-box;
}
</style>