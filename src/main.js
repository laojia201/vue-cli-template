import Vue from 'vue';
import Nprogress from "nprogress";
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'
import * as Quill from 'quill'
import { ImageDrop } from 'quill-image-drop-module';
// import { ImageResize } from 'quill-image-resize-module';
Quill.register('modules/imageDrop', ImageDrop);
// Quill.register('modules/imageResize', ImageResize);

import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
import store from "./store"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI);
Vue.use(VueQuillEditor)
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//     Nprogress.start()//加载开始
//     next()
// })

// router.afterEach(() => {
//     Nprogress.done() //加载完成
// })

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