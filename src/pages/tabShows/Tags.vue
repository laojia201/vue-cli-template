<template>
  <div class="right-content5">
    <div class="right-content5-one" style="margin-bottom:50px">
      <h5>用户信息</h5>
      <div class="right-content5-content">
        <button>用户名</button>
        <span>I love you</span>
      </div>
      <div class="right-content5-content">
        <button>国家</button>
        <span>瑞典</span>
      </div>
      <div class="right-content5-content">
        <button>手机号码</button>
        <span>11011912011</span>
      </div>
    </div>
    <div class="right-content5-two">
      <h5>用户画像</h5>
      <el-tag
        :key="tag.name"
        v-for="tag in dynamicTags"
        :type="tag.type"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
        class="right-content5-two-tags"
      >{{tag.name}}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"> + </el-button>
      <el-button @click="open" class="btn-for-dialog"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent5",
  data() {
    return {
      dynamicTags: [
        { name: "女性", type: "" },
        { name: "男性 ", type: "success" },
        { name: "妖", type: "info" },
        { name: "购物狂", type: "warning" },
        { name: "小心肝", type: "danger" }
      ],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    //   删除
    handleClose(tag) {
      this.open(tag);
    },
    // 是否展现输入框
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    // 确认添加
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push({ name: inputValue });
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    // 删除弹窗
    open(tag) {
      this.$confirm("此操作将永久删除该标签, 是否继续?", "注意", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
.right-content5-content {
  margin: 20px 0;
}
.right-content5-content button {
  border: none;
  border-radius: 4px;
  width: 81px;
  height: 25px;
  background: #e5e5e5;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
}
.right-content5-content button:focus {
  outline: 0;
}
.right-content5-two-tags {
  margin: 10px;
  border-radius: 15px;
  height: 30px;
  width: 76 px;
  text-align: center;
}
.right-content5-two-tags + .right-content5-two-tags {
  margin-left: 10px;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.button-new-tag {
  margin-left: 10px;
  width: 50px;
  height: 30px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 16px;
}
.btn-for-dialog {
  width: 0;
  padding: 0;
}
</style>