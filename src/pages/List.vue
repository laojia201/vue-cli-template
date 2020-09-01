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
      <el-tree
        :data="lists"
        :props="defaultProps"
        @node-click="handleNodeClick"
        class="list-content-tab"
        :render-content="renderContent"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      state: "",
      restaurants: [],
      lists: [{
          label: '123.com',
          children: [{
            label: '123111.com',
          }]
        }, {
          label: '456.com',
          children: [{
            label: '456111.com',
          },{
            label: '456222.com',
          }]
        }, {
          label: '789.com',
          children: [{
            label: '789111.com',
          },{
            label: '789222.com',
          },{
            label: '789333.com',
          }]
        }],
      defaultProps: {}
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
    // content内容列表
    handleNodeClick(data) {
      console.log(data);
    },
    renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
          </span>);
      }

  }
};
</script>

<style scoped>
.list {
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #DEE0E3;
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