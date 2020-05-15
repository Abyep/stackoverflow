import { SAVE_MOVIE } from "../Saga/index";

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default reducer;
