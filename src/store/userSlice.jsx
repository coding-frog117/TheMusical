import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'token',
	initialState: { value: '' },
	reducers: {
		depositToken(state, a) {
			state.value = a.payload;
		},
	},
});

export let { depositToken } = userSlice.actions;
