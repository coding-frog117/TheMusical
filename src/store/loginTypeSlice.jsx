import { createSlice } from '@reduxjs/toolkit';

export const loginTypeSlice = createSlice({
	name: 'login',
	initialState: { value: '' },
	reducers: {
		depositLoginType(state, a) {
			state.value = a
		},
	},
});

export let { depositLoginType } = loginTypeSlice.actions;
