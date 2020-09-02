<template>
  <div class="right-details">
    <i
      class="el-icon-arrow-left"
      style="position:absolute;top:27px;z-index:100;font-size:20px;cursor:pointer"
      @click="backToLast"
    ></i>
    <div class="right-details-top">
      <div class="right-details-top-one">
        <img :src="imgs.img1" />
      </div>
      <div class="right-details-top-two">
        <img :src="imgs.img2" />
        <img :src="imgs.img3" />
      </div>
    </div>
    <div class="right-details-center">
      <h4>{{titles}}</h4>
      <div class="right-details-center-content">
        <button>订单编号</button>
        <span>20200827135600001</span>
      </div>
      <div class="right-details-center-content">
        <button>订单状态</button>
        <span>未付款</span>
      </div>
      <div class="right-details-center-content">
        <button>购买方式</button>
        <span>游客购买</span>
      </div>
      <div class="right-details-center-content">
        <button>收获地址</button>
        <span>2020年8月27日 13:56:23</span>
      </div>
      <div class="right-details-center-content">
        <button>付款方式</button>
        <span>California, United States</span>
      </div>
      <div class="right-details-center-content">
        <button>参数</button>
        <span>WYF6636032</span>
      </div>
      <div class="right-details-center-content">
        <button>数量</button>
        <span>1</span>
      </div>
      <div class="right-details-center-content">
        <button>总价</button>
        <span>$ 26.99</span>
      </div>
      <div class="right-details-center-content">
        <button>运费</button>
        <span>$ 0.00</span>
      </div>
      <div class="right-details-center-content">
        <button>实付款</button>
        <span>$ 26.99</span>
      </div>
    </div>
    <div class="right-details-bottom">
      <button>订单消息记录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent2",
  data() {
    return {
      imgs: {
        img1: require("../../assets/icons/messages/bigImgTmp.png"),
        img2: require("../../assets/icons/messages/smalImgTop.png"),
        img3: require("../../assets/icons/messages/smallImgBottom.png")
      },
      titles: "硅胶厨具套装"
    };
  },
  methods: {
    //   回到上一页
    backToLast() {
      this.$store.commit("settalkTitle", {
        talkTitle: "订单"
      });
      this.$router.push({
        name: "Lists"
      });
    }
  }
};
</script>

<style scoped>
.right-details-top {
  display: flex;
  margin-bottom: 20px;
}
.right-details-top-one {
  width: 202px;
  height: 202px;
  flex-shrink: 0;
  margin-right: 10px;
}
.right-details-top-one img {
  width: 100%;
}
.right-details-top-two {
  flex-shrink: 0;
}
.right-details-top-two img {
  width: 98px;
  height: 98px;
}
.right-details-top-two img:nth-of-type(1) {
  margin-bottom: 8px;
}
.right-details-center-content {
  margin: 20px 15px 10px 0;
}
.right-details-center-content button {
  border: none;
  border-radius: 4px;
  width: 81px;
  height: 25px;
  background: #e5e5e5;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
}
.right-details-center-content button:focus {
  outline: 0;
}
.right-details-bottom button {
  border: none;
  border-radius: 4px;
  width: 310px;
  height: 30px;
  background: #3b4859;
  cursor: pointer;
  padding: 0;
  position: relative;
  top: 40px;
  color: white;
}
.right-details-bottom button:focus {
  outline: 0;
}
</style>