import API from './api';

export const register = async (userData) => {
    const res = await API.post('/auth/register', userData);
    return res.data;
};

export const login = async (userData) => {
    const res = await API.post('/auth/login', userData);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', res.data.username);
    return res.data;
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/login';
};