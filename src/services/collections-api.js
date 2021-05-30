import axios from 'axios';
import { API_BACKEND } from '../helpers/routes';
require('dotenv').config();

export const fetchCollections = async () => {
    try {
        return await axios.get(`${API_BACKEND}/api/collections/}`);
    } catch (error) {
        console.log(error);
    }
};
export const fetchGenres = async () => {
    try {
        return await axios.get(`${API_BACKEND}/api/genres/}`);
    } catch (error) {
        console.log(error);
    }
};

export const fetchCollection = async (id = 10) => {
    // return await axios
    //     .get(`https://api.themoviedb.org/3/collection/${id}?api_key=${API_KEY}`)
    //     .then(({ data }) => data)
    //     .catch(e => console.log(e));
    return [];
};
