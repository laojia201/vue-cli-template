<template>
  <div class="login-box">
    <div class="login-left">
      <img :src="img" />
    </div>
    <div class="login-right">
      <div class="login-right-top">
        <img :src="emailLogin" />
        <span>邮箱管理系统</span>
      </div>

      <div class="login-right-center">
        <el-input placeholder="管理员账号" prefix-icon="el-icon-my-username" v-model="username" class="userNameLogo"></el-input>
        <el-input placeholder="密码" prefix-icon="el-icon-search" v-model="userpwd"></el-input>
      </div>

      <div class="login-right-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      img: require("../../assets/icons/login/loginImg.png"),
      emailLogin: require("../../assets/icons/login/loginEmailIcon.png"),
      username: "",
      userpwd: ""
    };
  }
};
</script>
<style scoped>
.login-box {
  width: 1280px;
  height: 800px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.16);
  display: flex;
}
.login-left {
  width: 640px;
  height: 800px;
}
.login-right {
  padding: 125px 120px 32px 120px;
  box-sizing: border-box;
}
.login-left img {
  width: 50%;
  height: 100%;
}
.login-right-top {
  display: flex;
  align-items: center;
  font-family: "PingFang SC";
  font-weight: 500;
  font-size: 24px;
  text-align: left;
  color: #000;
}
.login-right-top img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.el-icon-my-username {
  background: url("../../assets/icons/login/loginUserNameLogo.png");
}
.el-icon-my-username::before {
  content: "username";
  font-size: 16px;
}
.userNameLogo .el-input__prefix{
  width: 50px;
height: 50px;
border-radius: 15px 0px 0px 15px;
background: #889fbe;
}
</style>