import React from 'react';
import { Input } from './RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { setAllSelect } from '../../store/cartAllSelectSlice';
import { notSelected } from '../../store/selectedItemSlice';

export default function AllSelectButton() {
	const dispatch = useDispatch();
	const allSelect = useSelector((state) => {
		return state.cartAllSelectSlice.value;
	});

	const totalCartPriceSlice = useSelector((state) => {
		return state.totalCartPriceSlice.value;
	});

	const deliveryFeeSlice = useSelector((state) => {
		return state.deliveryFeeSlice.value;
	});

	const selectedItemSlice = useSelector((state) => {
		return state.selectedItemSlice;
	});

	return (
		<label id="allSelect">
			<Input
				for="allSelect"
				type="checkbox"
				checked={allSelect}
				onChange={() => {
					// 단일 선택과 전체 선택의 금액 차감 액션이 겹치는 문제 발생 => 단일 선택한 아이템의 금액은 빼고 추가할 것. how?
					// 전체 선택 -> 단일 해제시 해당 금액 notselect에 추가 -> 전체 해제 -> 이미 단일 해제에서 추가된 부분을 전체 금액에서 빼고 넣기
					// 전체 해제 -> 단일 선택 시 해당 금액 notselect에서 빠짐 -> 전체 선택 -> 이미 단일 선택에서 빠진 부분을 넣기

					if (allSelect) {
						dispatch(
							notSelected({
								item: totalCartPriceSlice - selectedItemSlice.item,
								fee: deliveryFeeSlice - selectedItemSlice.fee,
							})
						);
					} else {
						dispatch(
							notSelected({
								item: -selectedItemSlice.item,
								fee: -selectedItemSlice.fee,
							})
						);
					}

					dispatch(setAllSelect(!allSelect));
				}}
			/>
		</label>
	);
}
