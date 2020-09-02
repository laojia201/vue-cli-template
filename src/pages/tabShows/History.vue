<template>
  <div class="right-content6">
    <ul class="right-content6-ul">
      <li class="right-content6-li">
        <div class="msg-one">
          <img
            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="msg-two">
          <div class="msg-two-top">
            <span>123</span>
            <span>789</span>
          </div>
          <div class="msg-two-bottom">456</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabContent6",
  data() {
    return {};
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
}
.msg-one {
  width: 32px;
  height: 32px;
}
.msg-one img {
  width: 100%;
  height: 100%;
}
</style>