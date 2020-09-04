<template>
  <div class="cums-tab-list">
    <div class="cums-tab-list-top">
      <div class="cums-tab-list-top-box">
        <span>所有联系人</span>
      </div>
    </div>
    <div class="cums-tab-list-content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="联系人" prop="name" align="center">
          <template slot-scope="scope">
            <div class="cums-tab-list-content-avert">
              <div class="cums-tab-list-content-img">{{scope.row.avert}}</div>
              <span>{{scope.row.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="邮箱" prop="mail" align="center"></el-table-column>
        <el-table-column label="手机号" prop="phone" align="center"></el-table-column>
        <el-table-column label="标签" prop="tags" align="center"></el-table-column>
        <el-table-column prop="createdDate" align="center">
          <template slot="header">
            <span>创建时间</span>
            <el-tooltip class="item" effect="light" content="按创建时间排序" placement="right">
              <i class="el-icon-sort" @click="sortOfCreatedData"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="updataData" align="center">
          <template slot="header">
            <span>更新时间</span>
            <el-tooltip class="item" effect="light" content="按更新时间排序" placement="right">
              <i class="el-icon-sort" @click="sortOfUpdataData"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <i class="el-icon-my-edit" @click="handleEdit(scope.row)"></i>            
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="cums-tab-list-bottom">
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
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
        {
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
        {
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
        {
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
        {
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
        {
          createdDate: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          mail: "123.com",
          phone: "11012011910",
          tags: "温和儒雅",
          updataData: "2020-8-24",
          avert: "w"
        },
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row);
      this.$store.commit("setcumsShowContent",row)
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 按创建时间排序
    sortOfCreatedData() {},
    // 按更新时间排序
    sortOfUpdataData() {}
  }
};
</script>

<style scoped>
.cums-tab-list{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.cums-tab-list-top-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
  height: 35px;
}
.cums-tab-list-content {
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
}
.el-icon-my-edit:before {
  content: "\8d3a";
  font-size: 12px;
  visibility: hidden;
}
.cums-tab-list-content-avert {
  display: flex;
  align-items: center;
}
.cums-tab-list-content-img {
  margin-right: 10px;
}
.cums-tab-list-content-avert .cums-tab-list-content-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: red;
  line-height: 32px;
  text-align: center;
}
.cums-tab-list-bottom {
  height: 130px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;
}
</style>