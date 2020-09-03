<template>
  <div class="right-content5">
    <div class="right-content5-top">
      <div class="right-content5-top-left">
        <i class="el-icon-user-solid"></i>
        <span style="margin-left:10px">所有联系人</span>
      </div>
      <div class="right-content5-top-right">{{totalNums}}</div>
    </div>
    <div class="right-content5-bottom">
      <ul class="right-content5-bottom-ul">
        <li
          class="right-content5-bottom-li"
          v-for="(item,keys) in lists"
          :key="item.state"
          @click="toShowDetail(keys)"
          ref="setBg"
        >
          <span>{{item.state}}</span>
          <span>{{item.total}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CumsList",
  data() {
    return {
      // totalNums: 123,
      lists: [
        {
          state: "123.com",
          total: 6
        },
        {
          state: "456.com",
          total: 12
        },
        {
          state: "789.com",
          total: 78
        }
      ]
    };
  },
  methods: {
    toShowDetail(index) {
      this.$refs.setBg.forEach(item => (item.style.background = ""));
      this.$refs.setBg[index].style.background = "#eff0f1";
    }
  },
  computed: {
    totalNums() {
      return this.lists.reduce((pre, next) => pre + next.total, 0);
    }
  }
};
</script>

<style scoped>
.right-content5-top {
  height: 60px;
  background: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 0 15px;
  box-sizing: border-box;
}
.right-content5-top-left i {
  color: #298df7;
  font-size: 18px;
}
.right-content5-top-left > span {
  font-family: "PingFang SC";
  font-weight: 600;
  text-align: left;
  color: #333;
  font-size: 16px;
}
.right-content5-top-right {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 12px;
  text-align: right;
  color: #888;
}
.right-content5-bottom-li {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px 0 43px;
  box-sizing: border-box;
}
.right-content5-bottom-li:hover {
  background: #eff0f1;
}
.right-content5-bottom-li span:nth-of-type(1) {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #333;
}
.right-content5-bottom-li span:nth-of-type(2) {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  color: #888;
}

</style>