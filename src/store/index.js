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
        setcumsShowContent(state,payload) {
            if (state.cumsShowContent == "tabLists") {
                state.cumsShowContent = "editor";
                state.cumsEditorData = payload;
            } else {
                state.cumsShowContent = "tabLists"
            }
        }
    },
    active: {},
});

export default store;