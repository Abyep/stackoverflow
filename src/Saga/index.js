import { put, call, takeLatest, take } from "redux-saga/effects";
import api from "../Api/index.js";

export const START_GET_MOVIE = "START_GET_MOVIE";
export const SAVE_MOVIE = "SAVE_MOVIE";

export const getMovies = (payload) => ({
  type: "START_GET_MOVIE",
  payload,
});


export default function* rootSaga() {
  yield takeLatest("START_GET_MOVIE", handleGetMovies);
}

function* handleGetMovies(action) {
  try {
    const movies = yield call(api.getMovies, action.payload);
    yield put({
      type: "SAVE_MOVIE",
      movies,
    });
  } catch (error) {
    yield put({
      type: "SAVE_MOVIE",
      error,
    });
  }
}
