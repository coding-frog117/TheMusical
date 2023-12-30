import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './store/userSlice';
import { loginTypeSlice } from './store/loginTypeSlice';
import { publicToken } from './store/publicUserSlice';
import { persistReducer } from 'redux-persist';
import { totalCartPriceSlice } from './store/totalCartPriceSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { deliveryFeeSlice } from './store/deliveryFeeSlice';
import { selectedItemSlice } from './store/selectedItemSlice';

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
		totalCartPriceSlice: totalCartPriceSlice.reducer,
		deliveryFeeSlice: deliveryFeeSlice.reducer,
		selectedItemSlice: selectedItemSlice.reducer,
	},
	middleware: [thunk, logger],
});

export default store;
