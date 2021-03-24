import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => axios.post('/users/signup', credentials);

export const logIn = credentials => axios.post('/users/login', credentials);

export const logOut = () => axios.post('/users/logout');

export const fetchCurrentUser = () => axios.get('/users/current');
