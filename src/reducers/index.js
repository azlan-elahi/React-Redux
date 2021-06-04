import { ADD_FAVOURITES, ADD_MOVIES, REMOVE_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";


const initialState = { list: [], favourites: [], showFavourites: false };
// export default function movies(state = initialState, action) {
//     if (action.type === ADD_MOVIES) {
//         return action.movies;
//     }
//     return state;
// }

export default function movies(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return { ...state, list: action.movies };
        case ADD_FAVOURITES:
            return { ...state, favourites: [action.movie, ...state.favourites] };
        case REMOVE_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.title !== action.movie.title
            );
            return { ...state, favourites: filteredArray };
        case SET_SHOW_FAVOURITES: {
            return { ...state, showFavourites: action.val };
        }
        default:
            return state;
    }
}