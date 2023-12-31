import { createSlice } from '@reduxjs/toolkit';

// 모든 장바구니 항목 선택 state
export const cartAllSelectSlice = createSlice({
	name: 'cartAllSelectSlice',
	initialState: {
		value: true,
	},
	reducers: {
		setAllSelect(state, a) {
			state.value = a.payload;
		},
	},
});

export let { setAllSelect } = cartAllSelectSlice.actions;
