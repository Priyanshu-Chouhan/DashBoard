// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducer';
import watchFetchDataSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchDataSaga);

export default store;
