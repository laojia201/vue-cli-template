<template>
  <div class="navs">
    <div class="navs-avert">
      <img :src="avertsIcon" />
    </div>
    <div class="navs-tab">
      <el-menu
        :default-active="liveNav"
        @select="handleOpen"
        :collapse="true"
        class="el-menu-vertical-demo"
        background-color="transparent"
      >
        <div>
          <el-menu-item index="1" style="heigth:34px">
            <i :class="navIconsTab == 1 ? 'el-icon-my-message':'el-icon-my-message'"></i>
            <span slot="title">消息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i :class="navIconsTab == 2 ? 'el-icon-my-contact':'el-icon-my-contact'"></i>
            <span slot="title">客服</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i :class="navIconsTab == 3 ? 'el-icon-my-history':'el-icon-my-history'"></i>
            <span slot="title">业务记录</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i :class="navIconsTab == 4 ? 'el-icon-my-tag':'el-icon-my-tag'"></i>
            <span slot="title">标签</span>
          </el-menu-item>
        </div>

        <div>
          <el-menu-item index="5" style="align-self:flex-end;">
            <i :class="navIconsTab == 5 ? 'el-icon-my-set':'el-icon-my-set'"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avertsIcon: require("../assets/icons/left/userHead.png"),
      liveNav: "1",
      navIconsTab: 1
    };
  },
  created() {
    console.log();
  },
  methods: {
    handleOpen(index) {
      switch (index) {
        case "1":
          this.$store.commit("setNavs",1);
          break;
        case "2":
          this.$store.commit("setNavs",2);
          break;
        case "3":
          this.$store.commit("setNavs",3);
          break;
        case "4":
          this.$store.commit("setNavs",4);
          break;
        case "5":
          this.$store.commit("setNavs",5);
          break;
      }
    }
  }
};
</script>

<style scoped>
.navs {
  height: 100%;
  box-sizing: border-box;
  background: #52607f;
  display: flex;
  flex-direction: column;
}
.navs-avert {
  width: 100%;
  height: 40px;
  padding: 28px 0 24px 0;
}
.navs-tab {
  flex: 1;
  width: 100%;
  height: 40px;
  padding: 0 0 28px 0;
}

.navs-avert img {
  width: 40px;
  margin: 0 auto;
}
.el-icon-my-message {
  background: url("../assets/icons/left/message.png") center no-repeat;
  background-size: cover;
}
.el-icon-my-message:before {
  content: "1";
  font-size: 20px;
  visibility: hidden;
  line-height: 46px;
}
.el-icon-my-contact {
  background: url("../assets/icons/left/contact.png") center no-repeat;
  background-size: cover;
}
.el-icon-my-contact:before {
  content: "2";
  font-size: 20px;
  visibility: hidden;
}
.el-icon-my-history {
  background: url("../assets/icons/left/history.png") center no-repeat;
  background-size: cover;
}
.el-icon-my-history:before {
  content: "3";
  font-size: 20px;
  visibility: hidden;
}
.el-icon-my-tag {
  background: url("../assets/icons/left/tag.png") center no-repeat;
  background-size: cover;
}
.el-icon-my-tag:before {
  content: "4";
  font-size: 20px;
  visibility: hidden;
}
.el-icon-my-set {
  background: url("../assets/icons/left/set.png") center no-repeat;
  background-size: cover;
}
.el-icon-my-set:before {
  content: "5";
  font-size: 20px;
  visibility: hidden;
}
.navs-tab .el-menu::after,
.navs-tab .el-menu::before {
  display: none;
}
.el-menu-vertical-demo {
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-menu-vertical-demo li {
  width: 100%;
  height: 46px;
}
.el-menu-vertical-demo li i {
  width: 20px;
  height: 20px;
}
.el-menu-vertical-demo li:hover {
  background: #09c198 !important;
}
.is-active {
  background: #09c198 !important;
}
</style>