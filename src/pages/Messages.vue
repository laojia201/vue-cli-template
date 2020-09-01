<template>
  <div class="messages">
    <div class="messages-content">
      <div class="messages-content-top">
        <div class="messages-content-top-box">
          <div class="messages-content-top-box-img">
            <img :src="messageAvertIcon" alt />
          </div>
          <span>123.com</span>
        </div>
      </div>
      <div class="messages-content-content">
        <ul class="messages-content-content-ul">
          <li class="messages-content-content-li" v-for="item in messagesData" :key="item.id">
            <div class="messages-content-content-li-top">
              <div class="message-content-avert">
                <img :src="item.avert" alt />
              </div>
              <div>
                <div class="message-content-name">{{item.name}}</div>
                <span class="message-content-mail">{{item.mail}}</span>
              </div>
            </div>

            <div class="messages-content-content-li-content">
              <div class="message-content-messages">
                <div>{{item.message}}</div>
                <div>{{item.messageEn}}</div>
              </div>
            </div>
            <div class="message-content-data">{{item.data}}</div>
          </li>
        </ul>

        <div class="message-wang-editor">
          <div ref="editor"></div>
          <!-- <el-button type="primary" class="message-wang-editor-btn">发送</el-button> -->
          <button class="message-wang-editor-btn">发送</button>
        </div>
      </div>
    </div>
    <div class="messages-nav">
      <rightNav></rightNav>
    </div>
  </div>
</template>

<script>
import rightNav from "./Right";

import E from "wangeditor";

export default {
  name: "Messages",
  components: {
    rightNav
  },
  data() {
    return {
      messageAvertIcon: require("../assets/icons/messages/logo_s.png"),
      messagesData: [
        {
          id: 1,
          name: "xiaoming",
          data: "2020-12-12",
          message: "你好啊！",
          mail: "111111.com",
          messageEn: "hello you good",
          avert: require("../assets/icons/messages/Head.png")
        },
        {
          id: 2,
          name: "xiaohong",
          data: "2030-12-12",
          message: "我好啊！",
          mail: "111111.com",
          messageEn: "hello you good",
          avert: require("../assets/icons/messages/Head1.png")
        }
      ]
    };
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
        console.log(html);
    };
    editor.customConfig.menus = ["emoticon", "italic"];

    editor.create();
  }
};
</script>

<style scoped>
.messages {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
}
.messages-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.messages-nav {
  width: 50px;
}
.messages-content-top-box {
  display: flex;
  padding: 17px 0 17px 21px;
  align-items: center;
  border-bottom: 1px solid #dee0e3;
}
.messages-content-top-box-img {
  height: 35px;
}
.messages-content-top-box-img img {
  height: 100%;
  margin-right: 12px;
}

.message-content-avert {
  width: 32px;
  height: 32px;
  display: flex;
  margin-right: 10px;
}
.message-content-avert img {
  width: 100%;
  height: 100%;
}
.messages-content-content {
  padding: 20px;
  font-family: "PingFangSC-Regular";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.messages-content-content-li {
  flex: 1;
  overflow: auto;
}

.messages-content-content-li-top {
  display: flex;
  margin-bottom: 6px;
}
.message-content-name {
  font-size: 14px;
  line-height: 14px;
}
.message-content-mail {
  font-size: 12px;
  line-height: 12px;
}
.messages-content-content-li-content {
  margin: 10px;
  background: #eff0f1;
  border-radius: 8px;
  margin: 0 40px;
}
.message-content-messages > div {
  padding: 0 5px;
  font-size: 14px;
}
.message-content-messages > div:nth-of-type(1) {
  padding: 16px 0 5px 0;
  margin: 0 5px;
  border-bottom: 1px solid #888888;
}
.message-content-messages > div:nth-of-type(2) {
  padding-bottom: 16px;
  padding-top: 5px;
}
.message-content-data {
  text-align: right;
  font-size: 12px;
  font-weight: 200;
  padding-right: 44px;
}
.messages-content-content-li:nth-of-type(2n) .messages-content-content-li-top {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
  /* margin-left: 10px; */
  /* border: 1px solid red; */
}
.messages-content-content-li:nth-of-type(2n) .message-content-avert {
  display: flex;
  margin-left: 10px;
}
.message-wang-editor {
  height: 150px;
}
</style>