import { createSlice } from '@reduxjs/toolkit';

export const totalCartPriceSlice = createSlice({
	name: 'totalCartPriceSlice',
	initialState: {
		value: 0,
	},
	reducers: {
		// 초기 가격 셋팅
		changePrice(state, a) {
			// state가 id를 포함하고 있다면 현재 id의 price를 뻬고 다시 더하기
			if (a.payload) {
				state.value += a.payload;
			}
		},

		// 기존 금액을 value에서 차감하는 함수
		minusPrice(state, a) {
			state.value -= a.payload;
		},
	},
});
export let { changePrice, minusPrice } = totalCartPriceSlice.actions;
