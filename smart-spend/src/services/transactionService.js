import API from './api';

export const addTransaction = async (data) => {
    const res = await API.post('/transactions', data);
    return res.data;
};

export const getTransactions = async (filters = {}) => {
    const res = await API.get('/transactions', { params: filters });
    return res.data;
};

export const deleteTransaction = async (id) => {
    const res = await API.delete(`/transactions/${id}`);
    return res.data;
};

export const getDashboardData = async () => {
    const res = await API.get('/transactions/dashboard');
    return res.data;
};