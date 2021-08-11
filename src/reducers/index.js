import { combineReducers } from "redux";
import favoriteReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

export const reducerCombine = combineReducers({
  movieReducer,
  favoriteReducer,
});

export default reducerCombine;
