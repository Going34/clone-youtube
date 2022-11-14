import { takeEvery } from '@redux-saga/core/effects';
import { all, put } from '@redux-saga/core/effects';
interface IData {
  type:string;
  payload:string;
}
function* getData(params:IData) {
  console.log("hi saga hi saga")
  console.log("params===",params)
  const  search  = params.payload
  console.log("search===" , search)
  const response = yield fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyDTA58s72FKpqCyx00t7gnahoXiR-9z7B4&maxResults=10&type=video`
  );
  const data = yield response.json();
  yield console.log('l  o   g', data);
  yield put({ type: 'SET_VIDEO_DATA', payload: data.items });
  return data.jokes;
}

export function* youtube() {
  yield all([takeEvery('CALL_FUNCTION', getData)]);
}
