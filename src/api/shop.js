import { get, post, del } from '../utils/request';

export function addShop(data) {
    return post("/shop/add", data)
}

export function resetPassword(data) {
    return post("/shop/resetPassword", data)
}

export function updateShop(data) {
    return post("/shop/update", data)
}

export function findShop() {
    return get("/shop/find");
}

export function deleteShop() {
    return del("/shop/delete");
}