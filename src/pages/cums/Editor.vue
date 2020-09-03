<template>
  <div class="cums-editor">
    <div class="cums-editor">
      <div class="cums-editor-box">
        <i class="el-icon-arrow-left" style="font-size:16px;cursor:pointer" @click="backLastPage"></i>
        <span>编辑联系人</span>
      </div>
    </div>
    <div class="cums-editor-content">
      <ul class="cums-editor-ul">
        <li class="cums-editor-li1">
          <div class="cums-editor-li1-img">{{$store.state.cumsEditorData.avert}}</div>
          <p class="cums-editor-li1-p">{{$store.state.cumsEditorData.name}}</p>
          <i class="el-icon-my-edit" style="position:relative;top:5px;margin-left:30px" @click="updataName"></i>
        </li>
        <li class="cums-editor-li2 cums-editor-li">
          <h4>联系方式</h4>
          <div>邮箱：{{$store.state.cumsEditorData.mail}}</div>
          <div>
            邮电话号码：{{$store.state.cumsEditorData.phone}}
            <i class="el-icon-my-edit" style="position:relative;top:-5px;margin-left:15px" @click="updataNumber"></i>
          </div>
        </li>
        <li class="cums-editor-li3 cums-editor-li">
          <h4>国家</h4>
          <div>{{$store.state.cumsEditorData.address}}</div>
        </li>
        <li class="cums-editor-li4 cums-editor-li">
          <h4>用户标签</h4>
          <div>{{$store.state.cumsEditorData.tags}}</div>
        </li>
        <li class="cums-editor-li5 cums-editor-li">
          <h4>其他信息</h4>
          <div>添加时间：{{$store.state.cumsEditorData.createdDate}}</div>
          <div>更新时间：{{$store.state.cumsEditorData.updataData}}</div>
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
      this.$store.commit("setcumsShowContent");
    },
    // 修改用户名
    updataName(){},
    // 修改手机号
    updataNumber(){},
  },
  created() {
    console.log(this.$store.state.cumsEditorData);
  }
};
</script>

<style scoped>
.cums-editor-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
  height: 35px;
}
.cums-editor-box > span {
  font-family: "PingFang SC";
  text-align: left;
  color: #333;
  margin-left: 15px;
}
.cums-editor-content {
  padding: 40px 140px 0 52px;
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
}
.cums-editor-li1 {
  display: flex;
  align-items: center;
}
.cums-editor-li1-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #526f6b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 10px;
}
.el-icon-my-edit {
  background: url("../../assets/icons/messages/editorForCums.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 50%;
  cursor: pointer;
  background-position: center 3px;
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
.cums-editor-li h4 {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #888;
  margin-top: 30px;
  margin-bottom: 8px;
  overflow: hidden;
}
.cums-editor-li div {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #333;
  margin: 8px;
}
</style>