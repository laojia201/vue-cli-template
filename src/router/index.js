import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/Login'
import Pwd from '../pages/forgetpwd/Forget'
import Home from '../pages/home/Home'
import NewAddMail from '../components/managecom/NewAddMail'
import AddNewCus from '../components/managecom/AddNewCus'
import UpdataEmail from '../components/managecom/UpdataEmail'
import UserRight from '../components/managecom/UserRight'
import EditorCum from '../components/managecom/EditorCum'
import SetRight from '../components/managecom/SetRight'
import TabForMail from '../components/managecom/TabForMail'
import { getToken } from '../utils/localStor';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: "/login"
    }, {
        path: '/login',
        name: "Login",
        component: Login
    }, {
        path: '/home',
        name: "Home",
        component: Home,
        meta: {
            isLogin: true
        },
        children: [{
            path: '/home/',
            name: "TabForMail",
            component: TabForMail,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/newAddMail',
            name: "NewAddMail",
            component: NewAddMail,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/updataEmail',
            name: "UpdataEmail",
            component: UpdataEmail,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/userRight',
            name: "UserRight",
            component: UserRight,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/addNewCus',
            name: "AddNewCus",
            component: AddNewCus,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/setRight',
            name: "SetRight",
            component: SetRight,
            meta: {
                isLogin: true
            },
        },{
            path: '/home/editorCum',
            name: "EditorCum",
            component: EditorCum,
            meta: {
                isLogin: true
            },
        },]
    }, {
        path: '/forgetpassword',
        name: "Pwd",
        component: Pwd,
    }]
});

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        if (to.name == 'Pwd') {
            next();
        } else if (to.name !== 'Login' && getToken() == null) {
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