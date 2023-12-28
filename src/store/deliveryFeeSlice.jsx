import { createSlice } from '@reduxjs/toolkit';

export const deliveryFeeSlice = createSlice({
	name: 'fee',
	initialState: { value: 0 },
	reducers: {
		addFee(state, a) {
			if (a.payload) {
				state.value += a.payload;
			}
		},
	},
});

export let { addFee } = deliveryFeeSlice.actions;
