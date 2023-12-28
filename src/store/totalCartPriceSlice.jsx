import { createSlice } from '@reduxjs/toolkit';

export const totalCartPriceSlice = createSlice({
	name: 'totalCartPriceSlice',
	initialState: { value: 0 },
	reducers: {
		changePrice(state, a) {
			if (a.payload) {
				state.value += a.payload;
			}
		},
	},
});
export let { changePrice } = totalCartPriceSlice.actions;
