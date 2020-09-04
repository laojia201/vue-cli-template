<template>
  <div class="right-content6">
    <div class="right-content6-title">
      <i class="el-icon-my-histro-list" style="position:relative;top:1px;right:1px"></i>
      <span>全部问题</span>
    </div>
    <ul class="right-content6-ul">
      <li class="right-content6-li" v-for="item in questions" :key="item">{{item}}</li>
    </ul>
    <div class="right-content6-bottom">
      <i class="el-icon-my-histro-list2" style="position:relative;top:2px;"></i>
      <span>添加分类</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistorList",
  data() {
    return {
      questions:["手机号相关"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.right-content6 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right-content6-title {
  height: 60px;
  background: #eff0f1;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
.right-content6-ul {
  flex: 1;
  padding: 0 0 0 26px;
}
.right-content6-li{
  margin: 19px 15px;
  font-family: "PingFang SC";
font-weight: 600;
font-size: 14px;
text-align: left;
color: #333;
}
.el-icon-my-histro-list {
  background: url("../../assets/icons/messages/historyList1.png") center center
    no-repeat;
  width: 32px;
  height: 32px;
  background-size: 50%;
}
.el-icon-my-histro-list::before {
  content: "分类";
  font-size: 16px;
  visibility: hidden;
}
.el-icon-my-histro-list2 {
  background: url("../../assets/icons/messages/historyList2.png") center center
    no-repeat;
  width: 28px;
  height: 32px;
  background-size: 50%;
}
.el-icon-my-histro-list2::before {
  content: "添加";
  visibility: hidden;
}
.right-content6-bottom {
  height: 40px;
  border-top: 1px solid #dee0e3;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-content6-bottom > span {
  font-family: "PingFang SC";
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #333;
  position: relative;
  top: 2px;
}
</style>