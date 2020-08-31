// token
export function setToken(token) {
    localStorage.setItem('token', token);
};

export function getToken() {
    return localStorage.getItem('token');
};

export function removeToken() {
    return localStorage.removeItem('token');
};

// 用户名
export function setUser(username) {
    localStorage.setItem('user', username);
};

export function getUser() {
    return localStorage.getItem('user');
};

export function removeUser() {
    return localStorage.removeItem('user');
};

// 手机号
export function setPhoneNumber(username) {
    localStorage.setItem('number', username);
};

export function getPhoneNumber() {
    return localStorage.getItem('number');
};

export function removePhoneNumber() {
    return localStorage.removeItem('number');
};

// 暂时没用
export function setNav(data) {
    localStorage.setItem('nav', JSON.stringify(data));
};

export function getNav() {
    return localStorage.getItem('nav');
};

// 清除所有local
export function delAllLocal(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('number');
}