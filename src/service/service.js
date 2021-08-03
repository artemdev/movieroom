import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '5cffc43a59e4bed587f4c127621519e5';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//     api_key: API_KEY,
// };

const getMovies = async (url = '') => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log('error', { error });
        return [];
    }
};

export function getCollection(movieId) {
    return getMovies(`/collection/${movieId}?language=ru-RU`);
}
export function getGenres() {
    return getMovies(`/genre/movie/list?language=ru-RU`);
}
export function getCredits(movieId) {
    return getMovies(`/movie/${movieId}/credits?language=en-US`);
}
