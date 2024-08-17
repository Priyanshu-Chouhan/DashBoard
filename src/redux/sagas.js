// src/redux/sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'http://52.168.1.54:8080/api/v1/userActivities');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchDataSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default watchFetchDataSaga;
