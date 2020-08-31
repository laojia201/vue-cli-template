import { get, post, del } from '../utils/request';

export function getSysShopfindPage(params){
    return get("/shopMail/findPage",params)
}

export function setSysShopMailAdd(data){
    return post("/shopMail/add",data)
}

export function delMailOne(data){
    return del("/shopMail/delete?mailId="+data)
}

export function updateMailOne(data){
    return post("/shopMail/update",data)
}

export function resetPasswordMailOne(data){
    return post("/shopMail/resetPassword",data)
}
