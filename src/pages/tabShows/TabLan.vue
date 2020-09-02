<template>
  <div class="right-content3">
    <div v-for="item in langs" :key="item">
      <span>{{item}}</span>
    </div>
    <div class="right-content3-view" style="text-align:left;position:relative;bottom:-65px">
        <span>翻译预览</span>
        <div class="right-content3-view-box" style="margin-top:10px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent3",
  data() {
    return {
      langs: [
        "英语",
        "日语",
        "俄语",
        "法语",
        "德语",
        "意大利语",
        "阿拉伯语",
        "西班牙语",
        "葡萄牙语",
        "芬兰语"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.right-content3 div {
  margin: 29px auto;
  text-align: center;
}
.right-content3 div span {
  cursor: pointer;
}    
.right-content3-view-box {
    border: 1px solid #d9dcde;
    border-radius: 6px;
    height: 148px;
    margin: 0;
}
.right-content3-view-title{
    
}
</style>