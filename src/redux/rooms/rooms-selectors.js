const getIsOpen = state => state.rooms.isOpen;
const getCurrentMovie = state => state.rooms.currentMovie;
const getMovieIsLoading = state => state.rooms.currentMovie.isLoading;
const getResultsVotes = state => state.rooms.results;
const getTotalPeopleVoted = state => 2;

const roomsSelectors = {
    getIsOpen,
    getCurrentMovie,
    getMovieIsLoading,
    getResultsVotes,
    getTotalPeopleVoted,
};

export default roomsSelectors;
