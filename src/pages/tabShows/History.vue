<template>
  <div class="right-content6">
    <ul class="right-content6-ul">
      <li class="right-content6-li" v-for="item in cumsList" :key="item.data">
        <div class="msg-one">
          <img :src="item.coverImg" />
        </div>
        <div class="msg-two">
          <div class="msg-two-top">
            <span>{{item.name}}</span>
            <span>{{item.data}}</span>
          </div>
          <div class="msg-two-bottom">{{item.msg}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabContent6",
  data() {
    return {
      cumsList: [
        {
          coverImg:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
          name: "Mollie Houston",
          data:"2020-7-25 14:23:22:04",
          msg:"Hello, Please give me a chance to…"
        },
        {
          coverImg:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
          name: "Mollie Houston",
          data:"2020-7-25 14:23:22:05",
          msg:"Hello, Please give me a chance to…"
        },
        {
          coverImg:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
          name: "Mollie Houston",
          data:"2020-7-25 14:23:22:06",
          msg:"Hello, Please give me a chance to…"
        },
        {
          coverImg:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
          name: "Mollie Houston",
          data:"2020-7-25 14:23:22:07",
          msg:"Hello, Please give me a chance to…"
        },
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.right-content6 {
  height: 100%;
}
.right-content6-ul {
  height: 100%;
  overflow: auto;
}
.right-content6-li {
  display: flex;
  height: 42px;
  font-family: "PingFang SC";
  font-size: 12px;
  text-align: left;
  color: #333;
  margin: 18px 0;
}
.msg-one {
  width: 32px;
  height: 32px;
}
.msg-one img {
  width: 100%;
  height: 100%;
}
.msg-two {
  flex: 1;
  margin-left: 10px;
}
.msg-two-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}
.msg-two-top > span:nth-of-type(2) {
  font-size: 10px;
  text-align: right;
  color: #888;
  font-weight: 500;
}
.msg-two-bottom {
  font-weight: normal;
  font-size: 12px;
  color: #666;
}
</style>