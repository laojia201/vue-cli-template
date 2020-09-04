<template>
  <div class="tags-list">
    <div class="tags-list-title">
      <i class="el-icon-my-histro-list" style="position:relative;top:1px;right:1px"></i>
      <span>自定义标签</span>
    </div>
    <!-- <ul class="tags-list-ul">
      <li class="tags-list-li" v-for="item in questions" :key="item">
        <i class="el-icon-my-histro-list3" style="position:relative;top:1px;right:1px"></i>
        <div style="flex:1;">{{item}}</div>
      </li>
    </ul> -->
    <div class="tags-list-bottom">
      <i class="el-icon-my-histro-list2" style="position:relative;top:2px;"></i>
      <span>退出登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistorList",
  data() {
    return {
      questions: ["我这暴脾气"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.tags-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tags-list-title {
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
/* .tags-list-ul {
  flex: 1;
  padding-left: 10px;
}
.tags-list-li {
  margin: 19px 0px;
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #333;
  display: flex;
  align-items: center;
} */
.el-icon-my-histro-list {
  background: url("../../assets/icons/messages/setIcon1.png") center 5px
    no-repeat;
  width: 32px;
  height: 28px;
  background-size: 40% 60%;
}
.el-icon-my-histro-list::before {
  content: "分类";
  font-size: 16px;
  visibility: hidden;
}
.el-icon-my-histro-list3 {
  background: url("../../assets/icons/messages/tagsIcon2.png") center 5px
    no-repeat;
  width: 32px;
  height: 28px;
  background-size: 40% 60%;
}
.el-icon-my-histro-list3::before {
  content: "分类";
  font-size: 16px;
  visibility: hidden;
}
.tags-list-bottom {
  height: 40px;
  border-top: 1px solid #dee0e3;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tags-list-bottom > span {
  font-family: "PingFang SC";
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #333;
  position: relative;
  top: 2px;
}
</style>