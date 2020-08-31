import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
import store from "./store"

Vue.use(ElementUI);
Vue.config.productionTip = false;
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