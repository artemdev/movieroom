import axios from 'axios';

axios.defaults.baseURL = 'https://movierooms.herokuapp.com';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = credentials =>
    axios.post('/auth/register', credentials);

export const logIn = credentials => axios.post('/auth/login', credentials);

export const logOut = () => axios.post('/auth/logout');

export const fetchCurrentUser = () => axios.get('/auth/current');
