<template>
  <div class="right-content4">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="全部问题" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      </el-collapse-item>
      <el-collapse-item title="手机号码相关" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      </el-collapse-item>
      
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "TabContent4",
  data() {
    return {
      activeNames: []
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
</style>