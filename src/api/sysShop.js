import { get, post, del } from '../utils/request';

export function getSysShopfind(params){
    return get("/shop/find",params)
}

export function addWebState(data){
    return post("/shop/add",data)
}

export function updateWebState(data){
    return post("/shop/update",data)
}

export function deleteWebState(id){
    return del("/shop/delete?shopId="+id)
}
