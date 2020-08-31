import { get } from '../utils/request';

export function smsIdentify(params) {
    return get("/seller/codeSms/identify", params)
}

export function smsSend(params) {
    return get("/seller/codeSms/send", params);
}