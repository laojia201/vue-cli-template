import { get } from '../utils/request';

export function getShopWebsite(){
    return get("/shop/queryShopWebsite")
}