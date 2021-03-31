import axios from 'axios';
const API_KEY = 'ca745db198ca3fbe8342f07480e09405';
const API_BACKEND = 'https://movierooms.herokuapp.com/rooms/create';

export const fetchCollection = async (id = 10) => {
    return await axios
        .get(`https://api.themoviedb.org/3/collection/${id}?api_key=${API_KEY}`)
        .then(({ data }) => data)
        .catch(e => console.log(e));
};

export const createRoom = async movies => {
    try {
        await axios.post(API_BACKEND, { movies });
    } catch (error) {
        console.log(error);
    }
};
