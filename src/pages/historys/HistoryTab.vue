<template>
  <div class="history-tab">
    <div class="history-tab-top">
      <div class="history-tab-top-box">
        <span>全部问题</span>
      </div>
    </div>
    <div class="history-tab-content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="42px" align="center"></el-table-column>
        <el-table-column label="问题名称" prop="questionName" align="center" width="80px"></el-table-column>
        <el-table-column label="日期" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="lastData" align="left">
          <template slot="header">
            <span>最后编辑时间</span>
            <el-tooltip class="item" effect="light" content="按最后编辑时间排序" placement="right">
              <i class="el-icon-sort" @click="sortOfCreatedData"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="hz" align="center">
          <template slot="header">
            <span>使用频率</span>
            <el-tooltip class="item" effect="light" content="按使用频率排序" placement="right">
              <i class="el-icon-sort" @click="sortOfCreatedData"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" class="opation-icons">
          <template slot-scope="scope">
            <!-- <i class="el-icon-my-edit" @click="handleEdit(scope.row)"></i> -->
            <i class="el-icon-my-view" @click="handleDetail(scope.row)"></i>
            <i class="el-icon-my-del" @click="handleDel(scope.row)"></i>
            <transition name="fade2">
              <div class="history-tab-del-dia" v-show="scope.row.isShow">
                <span>您确定删除此项吗？</span>
                <button @click="shureToCloseDia(scope.row)">确定</button>
                <i class="el-icon-close" @click="closeOneDia(scope.row)"></i>
              </div>
            </transition>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="history-tab-bottom">
      <el-pagination
        small
        layout="prev, pager, next, jumper, total"
        :total="50"
        :page-size="10"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabLists",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          questionName: "账号被盗",
          lastData: "2020-10-28",
          hz: "100",
          isShow: false
        },
        {
          date: "2016-05-03",
          questionName: "账号被盗",
          lastData: "2020-10-28",
          hz: "100",
          isShow: false
        },
        {
          date: "2016-05-03",
          questionName: "账号被盗",
          lastData: "2020-10-28",
          hz: "100",
          isShow: false
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    // 选择状态事件
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 编辑
    handleEdit(row) {
      console.log(row);
      this.$store.commit("setcumsShowContent", row);
    },
    // 打开删除弹窗
    handleDel(row) {
      this.tableData.forEach(item => (item.isShow = false));
      row.isShow = !row.isShow;
    },
    // 关闭删除的弹窗
    closeOneDia(row) {
      row.isShow = false;
    },
    // 确认删除
    shureToCloseDia(row) {
      this.$message({
        type: "success",
        message: "删除成功",
        showClose: true
      });
      row.isShow = false;
    },
    // 查看详情
    handleDetail(row) {
      this.$store.commit("setQuesDetail", row);
      this.$store.commit("setNavs", 6);
    },
    // 按最后编辑时间排序
    sortOfCreatedData() {}
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
}
.history-tab-content {
  padding: 40px 140px 0 52px;
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
}
.el-icon-my-edit {
  background: url("../../assets/icons/messages/editorForCums.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 50%;
  cursor: pointer;
  background-position: center 3px;
  position: relative;
  bottom: 7px;
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
.el-icon-my-del {
  background: url("../../assets/icons/messages/historyList3.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 50%;
  cursor: pointer;
  background-position: center 12px;
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
.el-icon-my-view {
  background: url("../../assets/icons/messages/historyList4.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 50%;
  cursor: pointer;
  background-position: center 12px;
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
.history-tab-bottom {
  height: 130px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;
}
.history-tab-del-dia {
  width: 310px;
  height: 45px;
  position: absolute;
  bottom: -30px;
  left: -173px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);
  z-index: 1;
}
.history-tab-del-dia {
  font-family: "PingFang SC";
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.history-tab-del-dia button {
  border: none;
  width: 60px;
  height: 25px;
  background: #3b4859;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: none;
}
.history-tab-del-dia i {
  font-size: 18px;
  cursor: pointer;
}
.fade2-enter-active {
  transition: all 0.1s ease;
}
.fade2-leave-active {
  transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade2-enter, .fade2-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>