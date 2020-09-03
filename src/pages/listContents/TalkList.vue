<template>
  <div class="right-content5">
    <el-tree
      :data="lists"
      :props="defaultProps"
      @node-click="handleNodeClick"
      class="list-content-tab"
      :render-content="renderContent"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "TalkList",
  data() {
    return {
      lists: [
        {
          label: "123.com",
          children: [
            {
              label: "123111.com"
            }
          ]
        },
        {
          label: "456.com",
          children: [
            {
              label: "456111.com"
            },
            {
              label: "456222.com"
            }
          ]
        },
        {
          label: "789.com",
          children: [
            {
              label: "789111.com"
            },
            {
              label: "789222.com"
            },
            {
              label: "789333.com"
            }
          ]
        }
      ],
      defaultProps: {}
    };
  },
  methods: {
    // content内容列表
    handleNodeClick(data) {
      console.log(data);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
        </span>
      );
    }
  }
};
</script>

<style scoped>
</style>