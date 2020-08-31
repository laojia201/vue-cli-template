export function setIpSession(shopId) {
    sessionStorage.setItem('shopId', shopId);
};

export function getIpSession() {
    return sessionStorage.getItem('shopId');
}

export function delIpSession() {
    return sessionStorage.removeItem('shopId');
}