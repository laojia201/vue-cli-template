import Vue from 'vue'
import VueRouter from 'vue-router'
import BoxShow from "../pages/BoxShow"
import Login from "../pages/logPages/Login"
// import CumsPage from "../pages/CumsPage"
// import HistoryTab from "../pages/HistoryTab"
// import TagsPage from "../pages/TagsPage"
// import SetPage from "../pages/SetPage"
import Lists from "../pages/tabShows/Lists"
import Details from "../pages/tabShows/Details"
import History from "../pages/tabShows/History"
import QuestTem from "../pages/tabShows/QuestTem"
import TabLan from "../pages/tabShows/TabLan"
import Tags from "../pages/tabShows/Tags"

import {getToken} from "../utils/localStor"

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
            name: "Login",
            component: Login,
        },
        {
            path: "/home",
            name: "BoxShow",
            component: BoxShow,
            meta:{
                isLogin:true
            },
            children: [{
                path: "/",
                name: "Lists",
                component: Lists,
                meta:{
                    isLogin:true
                },
            }, {
                path: "/home/details",
                name: "Details",
                component: Details,
                meta:{
                    isLogin:true
                },
            }, {
                path: "/home/history",
                name: "History",
                component: History,
                meta:{
                    isLogin:true
                },
            }, {
                path: "/home/questTem",
                name: "QuestTem",
                component: QuestTem,
                meta:{
                    isLogin:true
                },
            }, {
                path: "/home/tabLan",
                name: "TabLan",
                component: TabLan,
                meta:{
                    isLogin:true
                },
            }, {
                path: "/home/tags",
                name: "Tags",
                component: Tags,
                meta:{
                    isLogin:true
                },
            }]
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        console.log(111,getToken())
        if (to.name !== 'Login' && getToken() == null) {
            console.log(222)
            router.push({
                name: 'Login'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});



export default router;