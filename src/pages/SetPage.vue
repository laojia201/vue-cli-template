<template>
  <div class="tags-tab">
    <div class="tags-tab-top">
      <div class="tags-tab-top-box">
        <span>个人资料</span>
      </div>
    </div>
    <div class="tags-tab-content">
      <div class="right-content5-one">
        <div class="right-content5-one-img">
          <img src="../assets/icons/left/userHead.png" alt="图片加载失败" />
        </div>
        <div class="right-content5-one-right">
          <el-button type="text">更换头像</el-button>
          <p>请上传 jpg、png 格式的图片</p>
        </div>
      </div>

      <div class="right-content5-two">
        <h4>用户名</h4>
        <el-input v-model="editorName" placeholder="请输入内容" size="mini"></el-input>
      </div>

      <div class="right-content5-two">
        <h4>真实姓名</h4>
        <el-input v-model="username" placeholder="请输入内容" size="mini"></el-input>
      </div>

      <div class="right-content5-two">
        <h4 style="margin:0">联系电话</h4>
        <div class="right-content5-contact">
          <span>+86 19524294404</span>
          <el-button type="text">更换手机号</el-button>
        </div>
        <el-button type="text" @click="updataPwd">修改密码</el-button>
      </div>
    </div>
    <editiorPwd></editiorPwd>
    <div class="editor-btn">
      <button>取消</button>
      <button>确认</button>
    </div>
  </div>
</template>

<script>
import editiorPwd from "./dialogs/EditiorPwd";
export default {
  name: "SetPagesForSet",
  data() {
    return {
      editorName: "",
      username: ""
    };
  },
  methods: {
    // 修改密码
    updataPwd() {
      this.$store.commit("SetEditiorPwd");
    }
  },
  components: {
    editiorPwd
  }
};
</script>

<style scoped>
.tags-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tags-tab-top-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
  height: 35px;
}
.tags-tab-content {
  width: 300px;
  height: 324px;
  padding-left: 50px;
}
.tags-tab-two-tags + .tags-tab-two-tags {
  margin-left: 10px;
}
.right-content5-one {
  padding: 55px 0 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 27px;
}
.right-content5-one-img {
  width: 60px;
  height: 60px;
}
.right-content5-one-img img {
  width: 100%;
  height: 100%;
}
.right-content5-one-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.right-content5-one-right button {
  margin: 0 0 10px 0;
  padding: 0;
  text-align: right;
}
.right-content5-one-right p {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  color: #888;
  width: 100%;
  /* -webkit-transform: translateX(10px); */
  /* -webkit-transform: scale(0.8); */
  padding: 0;
  margin: 0;
}
.right-content5-two {
  margin: 0 0 25px 0;
  overflow: hidden;
}
.right-content5-two h4 {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #888;
  margin-bottom: 10px;
}
.right-content5-contact {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.right-content5-contact span {
  color: #333;
  padding: 16px 9px;
}
.right-content5-contact button {
  font-weight: 400;
  color: #3873ff;
  padding: 0;
  margin: 0;
}
.tags-tab .editor-btn{
  margin: auto 50px 60px auto;
}
.tags-tab .editor-btn > button {
  width: 70px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.tags-tab .editor-btn > button:nth-of-type(1) {
  background: #888;
  margin-right: 15px;
}
.tags-tab .editor-btn > button:nth-of-type(2) {
  background: #3b4859;
}
</style>