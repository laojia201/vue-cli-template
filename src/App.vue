<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6{
    padding: 0;
    margin: 0;
}
img{
  display: block;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
.el-menu-vertical-demo li div {
    top:-5px !important;
}
.list-top .el-autocomplete{
  width: 262px;
}
.list-top .el-autocomplete input{
  border: none;
  background: #e5e5e5;
  border-radius: 6px;
}
.list-content .el-tree-node__expand-icon{
    position: relative;
    left: 252px;
}
.list-content .el-tree .el-tree-node__content{
  padding: 17px 0;
}
.list-content .el-tree-node:hover{
  background: none;
}
.list-content .el-tree-node__content:hover{
  background: #dddddd;
}
.message-wang-editor .w-e-toolbar{
    position: relative;
    top: 116px;
    background: none !important;
    border-top: none !important;
}
/* .message-wang-editor .w-e-text{
    position: relative;
    bottom: 34px;
} */
.message-wang-editor .w-e-text-container{
    height: 116px !important;
    position: relative;
    bottom: 33px;
    border-top: 1px solid #ccc !important;
    border-bottom: none !important;
}
.message-wang-editor-btn{
  position: relative;
  left: calc(100% - 85px);
  bottom:32px;
  background: #3b4859;
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
}
</style>
