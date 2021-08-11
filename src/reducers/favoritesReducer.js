import { toggleFavorite, addFavorite } from "../actions/movieActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
export default favoriteReducer;
