import axios from 'axios';
import { getToken } from './localStor';

const instance = axios.create({
    timeout: 5000,
    baseURL: "http://10.10.10.28:8088"
});

instance.interceptors.request.use(
    function (config) {
        config.headers.token = getToken();
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    function (config) {
        return config.data;
    },
    function (err1) {
        return Promise.reject(err1);
    }
);

export function get(url, params) {
    return instance.get(url, {
        params
    });
};

export function post(url, data) {
    return instance.post(url, data);
};

export function put(url, data) {
    return instance.put(url, data);
}

export function del(url) {
    return instance.delete(url);
}