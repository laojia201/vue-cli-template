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
          <div class>
            <quill-editor
              v-model="content"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event,editor)"
              @ready="onEditorReady($event)"
            ></quill-editor>
          </div>
          <button class="message-wang-editor-btn">发送</button>
        </div>
      </div>
    </div>
    <div class="messages-nav">
      <transition name="fade1">
        <tabs class="messages-nav-one" v-show="$store.state.rightNavFlag"></tabs>
      </transition>

      <rightNav class="messages-nav-two"></rightNav>
    </div>
  </div>
</template>

<script>
import rightNav from "./Right";
import tabs from "./TabShow";

export default {
  name: "Messages",
  components: {
    rightNav,
    tabs
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
      ],
      content: "<h2>123456</h2>",
      editorOption: {
        modules: {
          toolbar: [
            // ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            // ["blockquote", "code-block"], //引用，代码块

            // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            // [{ list: "ordered" }, { list: "bullet" }], //列表
            // [{ script: "sub" }, { script: "super" }], // 上下标
            // [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{ direction: "rtl" }], // 文本方向

            // [{ size: ["small", false, "large", "huge"] }], // 字体大小
            // [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题

            // [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            // [{ font: [] }], //字体
            // [{ align: [] }], //对齐方式

            // ["clean"], //清除字体样式
            // ["image"] //上传图片、上传视频
          ],
          imageDrop: true
          // imageResize: {},
        },
        theme: "snow"
      }
    };
  },
  mounted() {
    // console.log("this is current quill instance object", this.editor);
  },
  methods: {
    // 失去焦点事件
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    // 获取焦点事件
    onEditorFocus(quill, editor) {
      console.log("editor focus!", quill);
      // editor.enable(false); // 在获取焦点的时候禁用
    },
    // 富文本初始化事件
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
    },
    // 输入框改变事件
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
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
  display: flex;
}
.messages-nav-one {
  width: 350px;
  height: 100%;
}
.messages-nav-two {
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

/* 载入动画效果 */
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
} */
.fade1-enter-active,
.fade1-leave-active {
  transition: width 0.2s ease;
}
.fade1-enter,
.fade1-leave-active {
  width: 0;
}
.fade1-enter, .fade1-leave-to /* .fade1-leave-active below version 2.1.8 */ {
  width: 0;
}

</style>