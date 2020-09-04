<template>
  <div class="editor-ques">
    <div class="editor-ques-top">
      <div class="editor-ques-box">
        <i class="el-icon-arrow-left" style="font-size:16px;cursor:pointer" @click="backLastPage"></i>
        <span>编辑问题</span>
      </div>
    </div>
    <div class="editor-ques-content">
      <ul class="editor-ques-ul">
        <li class="editor-ques-li">
          <h4>问题名称</h4>
          <el-input v-model="quesName" placeholder="请输入内容" size="mini"></el-input>
        </li>
        <li class="editor-ques-li">
          <h4>类别</h4>
          <el-select v-model="quesCatery" placeholder="请选择" size="mini">
            <el-option
              v-for="item in catery"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
        <li class="editor-ques-li">
          <h4>答案</h4>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="answers"></el-input>
        </li>
      </ul>
      <div class="editor-btn">
        <button>取消</button>
        <button>确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabLists",
  data() {
    return {
      quesName: "",
      quesCatery: "",
      answers: "",
      catery: [
        {
          value: "问题一",
          label: "问题一"
        }
      ]
    };
  },
  methods: {
    //   返回上一页
    backLastPage() {
      this.$store.commit("setNavs", 6);
    }
  }
};
</script>

<style scoped>
.editor-ques-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
  height: 35px;
}
.editor-ques-box > span {
  font-family: "PingFang SC";
  text-align: left;
  color: #333;
  margin-left: 15px;
}
.editor-ques-content {
  padding: 40px 140px 0 52px;
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.editor-ques-li h4 {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #888;
  margin-top: 30px;
  margin-bottom: 8px;
  overflow: hidden;
}
.editor-ques-li div {
  font-family: "PingFang SC";
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #333;
  margin: 8px;
}
.editor-ques {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.editor-btn {
  position: relative;
  bottom: 60px;
  right: -50px;
  text-align: right;
}
.editor-btn > button {
  width: 70px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.editor-btn > button:nth-of-type(1) {
  background: #888;
  margin-right: 23 px;
}
.editor-btn > button:nth-of-type(2) {
  background: #3b4859;
}
</style>