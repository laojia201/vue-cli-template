import { get, post } from '../utils/request';

export function loginForStaff(data){
    return post("/staff/login",data)
}

export function logOutForStaff(){
    return get("/staff/logOut");
}