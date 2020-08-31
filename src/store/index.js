import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        shopId:"",
        ipStateData:{},
        initIpStates:[],
        staffData:{},
        searchStaffData:{},
    },
    mutations:{
        setShopId(state,payload){
            state.shopId = payload
        },
        setIpStateData(state,payload){
            state.ipStateData = payload
        },
        setInitIpStates(state,payload){
            state.initIpStates = payload
        },
        setStaffData(state,payload){
            state.staffData = payload;
        },
        searchStaffData(state,payload){
            state.searchStaffData = payload;
        },
    },
    active:{},
});

export default store;