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
#apps {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
}
.app-content-bottom .el-pagination__editor.el-input {
  height: 19px;
  padding: 0;
}
.app-content-bottom .el-pagination__editor.el-input .el-input__inner {
  height: 100%;
  width: 34px;
}
.dia-del .el-dialog {
  width: 314px !important;
  margin-top: 35vh !important;
  /* height: 208px; */
}
.dia-del-ip-state .el-dialog {
  width: 314px !important;
  margin-top: 35vh !important;
  height: 208px;
  overflow: hidden;
}
.dia-del-ip-state .el-dialog__body {
  padding: 0;
  margin: 0 auto 0 20px;
}
.dia-del-ip-state .el-dialog__header {
  padding:0;
  margin: 16px auto 22px 20px;
}
.add-mail-content .el-form-item {
  width: 252px;
  height: 20px;
  font-family: Helvetica;
  font-size: 14px;
  color: #434347;
  letter-spacing: 0;
  text-align: center;
}
.add-mail-content .el-input__inner {
  padding: 0 8px;
  height: 20px;
  line-height: 20px;
  width: 146px;
  /* width:152px; */
}
.add-mail-content .el-form-item__error {
  padding: 0;
  font-size: 12px;
}
.add-mail-content .el-form-item {
  margin-bottom: 30px;
}
.item-last > div {
  margin-left: 23px !important;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #eafaf6 !important;
}
.diaSelect .el-input__inner {
  padding: 0 0 0 4px;
}
.newPwd .el-input--suffix {
  font-family: Helvetica;
  font-size: 12px;
  color: #979797;
  letter-spacing: 0;
  padding-right: 0.5rem;
  box-sizing: border-box;
  padding-left: 0;
}

.newPwd input::-webkit-input-placeholder {
  color: #979797;
  /* transform: scale(0.7); */
  font-size: 12px;
}
.add-mail-content .newPwd2 input {
  transform: scale(0.8);
  width: 184px;
  height: 25px;
  position: relative;
  left: -19px;
  top: -2px;
}
/* .newPwd2 input::-webkit-input-placeholder {
  color: #979797;
  transform: scale(0.7);
  font-size: 12px;
  position: relative;
  left: -16px;
} */

.newPwd input:-moz-placeholder {
  color: #979797;
  transform: scale(0.7);
}

.newPwd input::-moz-placeholder {
  color: #979797;
  transform: scale(0.7);
  font-size: 12px;
}

.newPwd input:-ms-input-placeholder {
  color: #979797;
  transform: scale(0.7);
  font-size: 12px;
}
.newPwd1 .el-select {
  margin-left: -66px;
  width: 70px;
}
.newPwd1 .el-select input {
  width: 100%;
  background: #efeff0;
  border-radius: 5px;
}
.newPwd1 .el-form-item__label {
  margin-left: -22px;
}
.newPwd2 .el-input__inner {
  padding-right: 17px;
  box-sizing: border-box;
  font-size: 12px;
}
.diaSelect .el-input--mini .el-input__inner {
  height: 20px;
  border: none;
  background: #efeff0;
}
.diaSelect .el-input__suffix .el-icon-arrow-up {
  height: 120% !important;
  height: 14px;
}
.dia-del2 > .el-dialog {
  width: 314px !important;
  height: 316px;
  margin-top: 35vh !important;
}
.dia-del1 > .el-dialog {
  width: 314px !important;
  height: 257px;
}
.demo-ruleForm1 {
  margin-left: 14px;
}
.dia-del2 .el-dialog__body {
  padding-top: 25px;
}
.demo-ruleForm1 .el-form-item {
  height: 16px;
  margin-left: 36px;
  font-family: Helvetica;
  font-size: 12px;
  color: #434347;
  letter-spacing: 0;
  padding: 0;
  margin: 0 0 14px 0;
  line-height: 16px;
  display: flex;
}

.demo-ruleForm1 .el-form-item label {
  /* width: 92px; */
}
.newPwd6 {
  width: 100%;
}
.newPwd6 .input-number-detail .el-input__inner {
  width: 70px;
  border: none;
  background: #efeff0;
  padding: 0 10px 0 10px;
  text-align: left;
}
.newPwd6 .el-input {
  text-align: left;
}

.input-number-detail span {
  color: #cdcdcd;
  background: transparent;
  width: 10px !important;
  height: 10px !important;
  border: none !important;
}
.input-number-detail span i {
  color: #cdcdcd;
}
.input-number-detail span.el-input-number__decrease {
  right: 65px !important;
  bottom: 9px !important;
}
.input-number-detail span.el-input-number__increase {
  right: 65px !important;
  top: 4px !important;
}


.newPwd6 .el-form-item__content {
  margin-left: 102px !important;
}
.demo-ruleForm1 .el-form-item__content div {
  height: 20px;
}
.demo-ruleForm1 .el-form-item__content input {
  height: 100%;
  padding-left: 4px;
  width: 176px !important;
  display: inline-block;
}
.demo-ruleForm-phone .el-form-item__content input {
  width: 100px !important;
}
.app-content-bottom
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #09c198;
}
.app-content-bottom
  .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: black;
}
.dia-del3 .el-dialog__body {
  padding-top: 15px;
}
.select-state .el-select__caret {
  position: relative;
  top: 0;
  right: -9px;
}
.edite-mails .el-input__inner {
  font-size: 12px;
}

body {
  -webkit-text-size-adjust: none;
}
.pwd-placehold .el-input__inner {
  width: 183px;
  height: 23px !important;
  display: inline-block;
  transform: scale(0.8);
  position: relative;
  left: -5px;
  top: 1px;
}
.pwd-placehold .el-input__inner::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  font-size: 8px;
  transform: scale(0.8);
  position: relative;
  -webkit-text-size-adjust: none;
  left: -12px;
  /* padding-right: 0px; */
}
.pwd-placehold :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #909;
}
.pwd-placehold ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #909;
}
.pwd-placehold :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #909;
}
/* .demo-ruleForm1 .addRedStar2 label.el-form-item__label{
  width:200px;
} */
.pwd-reset {
  display: block;
  width: 110px;
  text-align: right;
}
.pwd-reset::before {
  content: "*";
  color: red;
  position: relative;
  left: -4px;
}
.el-dialog .el-dialog__headerbtn {
  top: 27px;
}
.avatar-uploader {
  overflow: visible !important;
}
.el-upload--text {
  width: 64px;
  height: 26px;
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
}
.newPwd6 input {
}
.editorDia .el-dialog {
  width: 314px !important;
  height: 367px;
  margin: 0 auto;
  padding: 0;
  margin-top: 30vh !important;
}
.editorDia .el-dialog__body {
  padding: 10px 20px 0 33px;
}
.editorDia .addRedStar label{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #434347;
  letter-spacing: 0;
}
.editorDia .addRedStar .el-input--mini{
  height: 22px;
}
.editorDia .addRedStar .el-input--mini input{
  height: 100%;
}
.editorDia .addRedStar .el-input--mini input::placeholder{
  font-size: 8px;
}

.editorDia .addRedStar.el-input__inner::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  font-size: 8px;
  transform: scale(0.8);
  position: relative;
  -webkit-text-size-adjust: none;
  left: -12px;
  /* padding-right: 0px; */
}
.newpwd-editor-cum .el-form-item__content{
  margin-left: 100px !important;
}
.newpwd-editor-cum  .input-number-detail .el-input__inner {
  width: 70px;
  border: none;
  background: #efeff0;
  padding: 0 10px 0 10px;
  text-align: left;
}
.input-number-detail .el-input{
  text-align: left;
}
.dia-updata-pwd .el-dialog__body{
  padding: 10px 0 0 25px;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(1){
  padding-left: 8px;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(2) input{
  width:96px !important;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(3) input{
  width:157px !important;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(4) input{
  width:157px !important;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(4){
  position: relative;
  left: -27px;
}
.dia-updata-pwd .el-dialog__body .el-form-item:nth-of-type(4) label{
  padding-right: 11px !important;
}
.demo-ruleForm-pwd{
  padding-left: 13px;
}
.el-table__body-wrapper{
  font-size: 12px;
}

.demo-ruleForm input:-ms-input-placeholder {
  font-size: 12px;
}
.demo-ruleForm input::-webkit-input-placeholder{
  font-size: 12px;
}
.dia-del-ip-state .el-dialog__footer{
  padding: 0;
  margin: 20px 20px auto auto;
}
.dia-del-ip-state-btn{
  width: 76px;
  height: 30px;
}
.dia-del-ip-state-btn span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.ip-tab-show .center-content {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>
