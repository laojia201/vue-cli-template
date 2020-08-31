import { get, post } from '../utils/request';

export function login(data){
    return post("/sysUser/login",data)
}

export function userUpdatePassword(data){
    return post("/sysUser/updatePassword",data)
}

export function userUpdate(data){
    return post("/sysUser/update",data)
}

export function logOut(){
    return get("/sysUser/logOut");
}