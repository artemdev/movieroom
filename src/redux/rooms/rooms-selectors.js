const getIsOpen = state => state.rooms.isOpen;
// const getMovies = state => state.rooms.movies;
const getCurrentMovie = state => state.rooms.currentMovie;
const getMovieIsLoading = state => state.rooms.currentMovie.isLoading;
const roomsSelectors = {
    getIsOpen,
    getCurrentMovie,
    getMovieIsLoading,
};

export default roomsSelectors;
