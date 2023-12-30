import { createSlice } from '@reduxjs/toolkit';

// 체크 해제 시 총 구매금액 변동을 위해 생성
export const selectedItemSlice = createSlice({
	name: 'selectedItemSlice',
	initialState: {
		item: 0,
		fee: 0,
	},
	reducers: {
		notSelected(state, a) {
			state.item += a.payload.item;
			state.fee += a.payload.fee;
		},
	},
});

export let { notSelected } = selectedItemSlice.actions;
