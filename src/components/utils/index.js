const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const login = (res) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refresh);
}

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
        return true;
    }

    return false;
}