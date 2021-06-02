import axios from 'axios';
import { API_BACKEND } from '../helpers/routes';

export const fetchCollections = async () => {
    try {
        return await axios.get(`${API_BACKEND}/api/collections`);
    } catch (error) {
        console.log(error);
    }
};
