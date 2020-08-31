import { get, post } from '../utils/request';

export function addNewCus(data){
    return post("/staffCtl/add",data)
}

export function updateCusState(params){
    return get("/staffCtl/updateState",params);
}

export function carryCus(data){
    return post("/staffCtl/carry",data)
}

export function queryPage(data){
    return post("/staffCtl/queryPage",data)
}

export function updateCusData(data){
    return post("/staffCtl/update",data)
}