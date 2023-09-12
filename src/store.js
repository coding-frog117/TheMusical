import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { userSlice } from './store/userSlice';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user : userSlice.reducer,
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['user'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer : persistedReducer,
    middleware : [thunk, logger],
})

export default store;