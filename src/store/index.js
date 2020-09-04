import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        rightNavFlag: false,
        tabFlag: 1,
        talkTitle: "订单",
        navs: 1,
        cumsShowContent: "tabLists",
        cumsEditorData: {},
        quesDetail:{},
        editiorPwd:false
    },
    mutations: {
        setrightNavFlag(state, payload) {

            if (state.tabFlag !== payload.tabFlag) {
                state.rightNavFlag = true;
                state.tabFlag = payload.tabFlag;
                state.talkTitle = payload.talkTitle;
                state.tabIsShow = !state.tabIsShow;
            } else {
                state.rightNavFlag = !state.rightNavFlag;
            }
        },
        settalkTitle(state, payload) {
            state.talkTitle = payload.talkTitle;
        },
        
        setNavs(state, payload) {
            state.navs = payload;
        },
        // 暂存切换状态
        setcumsShowContent(state,payload) {
            if (state.cumsShowContent == "tabLists") {
                state.cumsShowContent = "editor";
                state.cumsEditorData = payload;
            } else {
                state.cumsShowContent = "tabLists"
            }
        },
        // 暂存某客户问题详情
        setQuesDetail(state, payload) {
            state.quesDetail = payload;
        },
        // 修改密码弹框控制
        SetEditiorPwd(state, payload){
            state.editiorPwd = !state.editiorPwd;
        }
    },
    active: {},
});

export default store;