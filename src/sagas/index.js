import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() {
  console.log('funtion called');
  const endPoint =
    'https://gist.githubusercontent.com/Sharanagouda/3752559ddaf3a0d784dd783e38c25fe3/raw/7cc6c502c750aff3f922e45619dfde85aedbb5f4/todo-items.json';
  const response = yield call(fetch, endPoint);
  const data = yield response.json();
  console.log(data);
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
