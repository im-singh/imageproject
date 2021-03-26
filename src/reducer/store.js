import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

import photosReducer from './photoReducer';
import mySaga from './saga/saga';
const sagaMiddleware = createSagaMiddleware()

const reducer = {
    photos: photosReducer
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, sagaMiddleware]),
})
sagaMiddleware.run(mySaga);

export default store;