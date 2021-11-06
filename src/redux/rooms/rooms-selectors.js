const getIsOpen = state => state.rooms.isOpen;
// const getMovies = state => state.rooms.movies;
const getCurrentMovie = state => state.rooms.currentMovie;
const getMovieIsLoading = state => state.rooms.currentMovie.isLoading;
const getResultsVotes = state => state.rooms.results;
const roomsSelectors = {
    getIsOpen,
    getCurrentMovie,
    getMovieIsLoading,
    getResultsVotes,
};

export default roomsSelectors;
