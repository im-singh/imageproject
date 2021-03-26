import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchPhotos, randomPhotos } from '../api';
import { fetchFail, fetchSuccess, fetchPhotos } from '../photoReducer';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPhoto(action) {
    try {
        console.log("acion: ", action);
        let list = []
        if (action.payload.type === 'random') {
            list = yield call(randomPhotos, '')
        }
        else {
            list = yield call(searchPhotos, action.payload.string);
        }
        yield put(fetchSuccess(list));
    } catch (e) {
        yield put(fetchFail('error'));
    }
}

export default function* mySaga() {
    yield takeEvery(fetchPhotos().type, fetchPhoto);
}