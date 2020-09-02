<template>
  <div class="right">
    <div class="right-nav">
      <img
        :src="tabFlag == 1 && $store.state.rightNavFlag ? iconss.top11:icons.top1"
        @click="setTab(1)"
      />
      <img
        :src="tabFlag == 2 && $store.state.rightNavFlag ? iconss.top22:icons.top2"
        @click="setTab(2)"
      />
      <img
        :src="tabFlag == 3 && $store.state.rightNavFlag ? iconss.top33:icons.top3"
        @click="setTab(3)"
      />
      <img
        :src="tabFlag == 4 && $store.state.rightNavFlag ? iconss.top44:icons.top4"
        @click="setTab(4)"
      />
      <img
        :src="tabFlag == 5 && $store.state.rightNavFlag ? iconss.top55:icons.top5"
        @click="setTab(5)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {
      icons: {
        top1: require("../assets/icons/messages/right1.png"),
        top2: require("../assets/icons/messages/right2.png"),
        top3: require("../assets/icons/messages/right3.png"),
        top4: require("../assets/icons/messages/right4.png"),
        top5: require("../assets/icons/messages/right5.png")
      },
      iconss: {
        top11: require("../assets/icons/messages/right11.png"),
        top22: require("../assets/icons/messages/right22.png"),
        top33: require("../assets/icons/messages/right33.png"),
        top44: require("../assets/icons/messages/right44.png"),
        top55: require("../assets/icons/messages/right55.png")
      },
      tabFlag: 1,
      flag: false
    };
  },
  methods: {
    setTab(data) {
      this.flag = !this.flag;
      switch (data) {
        case 1:
          this.tabFlag = 1;
          this.$store.commit("setrightNavFlag", {
            flag: this.flag,
            tabFlag: this.tabFlag,
            talkTitle: "订单"
          });
          this.$router.push({
            name: "Lists"
          });
          break;
        case 2:
          this.tabFlag = 2;
          this.$store.commit("setrightNavFlag", {
            flag: this.flag,
            tabFlag: this.tabFlag,
            talkTitle: "翻译语言"
          });
          this.$router.push({
            name: "TabLan"
          });
          break;
        case 3:
          this.tabFlag = 3;
          this.$store.commit("setrightNavFlag", {
            flag: this.flag,
            tabFlag: this.tabFlag,
            talkTitle: "问题模版"
          });
          this.$router.push({
            name: "QuestTem"
          });
          break;
        case 4:
          this.tabFlag = 4;
          this.$store.commit("setrightNavFlag", {
            flag: this.flag,
            tabFlag: this.tabFlag,
            talkTitle: "标签"
          });
          this.$router.push({
            name: "Tags"
          });
          break;
        case 5:
          this.tabFlag = 5;
          this.$store.commit("setrightNavFlag", {
            flag: this.flag,
            tabFlag: this.tabFlag,
            talkTitle: "历史"
          });
          this.$router.push({
            name: "History"
          });
          break;
        default:
          break;
      }
    }
  },
  created() {
    // this.tabFlag = 1;
    // this.$store.commit("setrightNavFlag", {
    //   flag: this.flag,
    //   tabFlag: this.tabFlag,
    //   talkTitle: "订单"
    // });
    // this.$router.push({
    //   name: "Lists"
    // });
  }
};
</script>

<style scoped>
.right {
  height: 100%;
  box-sizing: border-box;
  background: #f5f6f7;
  display: flex;
}
.right .right-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.right .right-nav img {
  width: 18px;
  height: 21px;
  margin: 26px 0;
  cursor: pointer;
}
</style>