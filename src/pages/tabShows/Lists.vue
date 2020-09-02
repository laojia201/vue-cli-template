<template>
  <div>
    <ul class="buy-lists">
      <li class="buy-list" v-for="item in lists" :key="item.buyNums">
        <div class="buy-list-left" @click="goToOneDetai">
          <img :src="item.coverImg" />
        </div>
        <div class="buy-list-right">
          <div class="buy-list-right-one">
            <div>{{item.buyNums}}</div>
            <span>{{item.title}}</span>
          </div>
          <div class="buy-list-right-teo">
            <el-select v-model="item.state" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lists",
  data() {
    return {
      lists: [
        {
          coverImg: require("../../assets/icons/messages/dingdan1.png"),
          buyNums: "202008271356000001",
          title: "多彩金属道具",
          state: "已处理"
        },
        {
          coverImg: require("../../assets/icons/messages/dingdan1.png"),
          buyNums: "202008271356000002",
          title: "多彩金属道具",
          state: "未处理"
        },
        {
          coverImg: require("../../assets/icons/messages/dingdan1.png"),
          buyNums: "202008271356000003",
          title: "多彩金属道具",
          state: "处理中"
        }
      ],
      options: [
        {
          value: "处理中",
          label: "处理中"
        },
        {
          value: "未处理",
          label: "未处理"
        },
        {
          value: "已处理",
          label: "已处理"
        }
      ],
      value: "已处理"
    };
  },
  methods: {
    // 点击进入详情
    goToOneDetai() {
      this.$store.commit("settalkTitle", {
        talkTitle: "订单详情"
      });
      this.$router.push({
        name: "Details"
      });
    }
  }
};
</script>

<style scoped>
.buy-list {
  display: flex;
  height: 50px;
  font-family: "PingFang SC";
  align-items: center;
  margin: 24px 0;
}
.buy-list-left {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  cursor: pointer;
}
.buy-list-left img {
  width: 100%;
  height: 100%;
}
.buy-list-right-one > div {
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #333;
}
.buy-list-right-one > span {
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  color: #666;
}
.buy-list-right {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 10px;
  align-items: center;
}
.buy-list-right-teo {
  width: 70px;
}
</style>