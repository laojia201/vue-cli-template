import Vue from 'vue';
import Nprogress from "nprogress";
import ElementUI from 'element-ui';
// var bodyParser = require('body-parser')
// var ueditor = require("ueditor")
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
import store from "./store"

Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    Nprogress.start()//加载开始
    next()
})

router.afterEach(() => {
    Nprogress.done() //加载完成
})

// const originalReplace = VueRouter.prototype.replace;
// VueRouter.prototype.replace = function replace(location) {
//     return originalReplace.call(this, location).catch(err => err);
// };
Vue.prototype.$EventBus = new Vue();
var vueApp = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})