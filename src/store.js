import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './store/userSlice';
import { loginTypeSlice } from './store/loginTypeSlice';
import { publicToken } from './store/publicUserSlice';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	token: userSlice.reducer,
	login_type: loginTypeSlice.reducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: {
		persistedReducer,
		publicToken: publicToken.reducer,
	},
	middleware: [thunk, logger],
});

export default store;
