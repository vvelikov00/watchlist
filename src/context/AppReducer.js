// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVOURITE":
            return {
                ...state,
                favourite: [action.payload, ...state.favourite]
            }
        case "REMOVE_MOVIE":
            return {
                ...state,
                favourite: state.favourite.filter(element => element.id !== action.payload)
            }
        default:
            return state;
    }
};