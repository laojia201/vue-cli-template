import Vue from 'vue'
import VueRouter from 'vue-router'
import BoxShow from "../pages/BoxShow"
import Lists from "../pages/tabShows/Lists"
import Details from "../pages/tabShows/Details"
import History from "../pages/tabShows/History"
import QuestTem from "../pages/tabShows/QuestTem"
import TabLan from "../pages/tabShows/TabLan"
import Tags from "../pages/tabShows/Tags"

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
            children: [{
                path: "/",
                name: "Lists",
                component: Lists,
            },{
                path: "/details",
                name: "Details",
                component: Details,
            },{
                path: "/history",
                name: "History",
                component: History,
            },{
                path: "/questTem",
                name: "QuestTem",
                component: QuestTem,
            },{
                path: "/tabLan",
                name: "TabLan",
                component: TabLan,
            },{
                path: "/tags",
                name: "Tags",
                component: Tags,
            }]
        },
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