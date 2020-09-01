import Vue from 'vue'
import VueRouter from 'vue-router'
import BoxShow from "../pages/BoxShow"
import Left from "../pages/Left"

// import { getToken } from '../utils/localStor';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            name: "BoxShow",
            component: BoxShow,
        },
        // {
        //     path:"/",
        //     name:"Left",
        //     component: Left,
        // },
    ]
});



// router.beforeEach((to, from, next) => {
//     if (to.meta.isLogin) {
//         if (to.name == 'Pwd') {
//             next();
//         } else if (to.name !== 'Login' && getToken() == null) {
//             router.push({
//                 name: 'Login'
//             })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// });



export default router;