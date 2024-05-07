import Cookies from 'js-cookie';


export function setCookie(name: string, value: string, days: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function getCookie(cookieName: string) {
    const accessToken =  Cookies.get(cookieName)
    return accessToken;
}   