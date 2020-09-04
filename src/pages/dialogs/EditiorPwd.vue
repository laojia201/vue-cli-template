<template>
  <div class="editor-pwd">
    <el-dialog title="修改密码" :visible.sync="$store.state.editiorPwd" width="30%" :before-close="handleClose">
      <!-- <span slot-scope="title">修改密码</span> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="$store.state.editiorPwd = false">取 消</el-button>
        <el-button type="primary" @click="$store.state.editiorPwd = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "EditorPwd",
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
</style>