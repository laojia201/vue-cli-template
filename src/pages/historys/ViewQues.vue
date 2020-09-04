<template>
  <div class="history-tab">
    <div class="history-tab-top">
      <div class="history-tab-top-box">
        <div>
          <i class="el-icon-arrow-left" style="font-size:16px;cursor:pointer" @click="backLastPage"></i>
          <span>查看问题</span>
        </div>

        <i class="el-icon-my-edit" @click="editorOneQues"></i>
      </div>
    </div>
    <div class="history-tab-content">
      <ul class="history-tab-ul">
        <li class="history-tab-li2 history-tab-li">
          <h4>问题名称</h4>
          <div>邮箱：{{$store.state.quesDetail.questionName}}</div>
        </li>
        <li class="history-tab-li3 history-tab-li">
          <h4>类别</h4>
          <div>常见问题</div>
        </li>
        <li class="history-tab-li4 history-tab-li">
          <h4>答案</h4>
          <div>今日天气不错哦！</div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "TabLists",
  data() {
    return {};
  },
  methods: {
    //   返回上一页
    backLastPage() {
      this.$store.commit("setNavs", 3);
    },
    // 编辑问题
    editorOneQues(){
        this.$store.commit("setNavs", 7);
    },
  }
};
</script>

<style scoped>
.history-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.history-tab-top-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
  height: 35px;
  justify-content: space-between;
}
.history-tab-top-box span {
  margin-left: 10px;
}
.history-tab-content {
  padding: 0 0 0 50px;
}
.history-tab-li1 {
  display: flex;
  align-items: center;
}
.history-tab-li h4 {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #888;
  margin-top: 30px;
  margin-bottom: 8px;
  overflow: hidden;
}
.history-tab-li div {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #333;
  margin: 8px;
}

.el-icon-my-edit {
  background: url("../../assets/icons/messages/editorForCums.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 50%;
  cursor: pointer;
  background-position: center 3px;
  position: relative;
  top: 5px;
  right: 100px;
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
</style>