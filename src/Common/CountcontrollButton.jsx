import React from 'react';
import { useState, useEffect } from 'react';
import PlusIcon from '../assets/icon-plus-line.svg';
import MinusIcon from '../assets/icon-minus-line.svg';
import CountButton from './CountButton';
import CountText from '../GoodsDetail/atoms/CountText';
import ControllButtonFrame from '../Cart/atoms/ControllButtonFrame';
import styled from 'styled-components';
import { useGet, usePut } from '../hooks/useFetch';
import { cartEdit } from '../apis/cartEdit';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { minusPrice } from '../store/totalCartPriceSlice';
import { useDispatch } from 'react-redux';
import { notSelected } from '../store/selectedItemSlice';

const PlusButton = styled(CountButton)`
	background-image: url(${PlusIcon});
`;

const MinusButton = styled(CountButton)`
	background-image: url(${MinusIcon});
`;

export default function CountControllButton({ count, setCount, id, cartId, btnCheck }) {
	const dispatch = useDispatch();

	const [price, setPrice] = useState();
	const [fee, setFee] = useState();

	const getFunc = useGet(`products/${id}`);

	useEffect(() => {
		getFunc().then((res) => {
			setPrice(res.data.price);
			setFee(res.data.shipping_fee);
		});
	}, []);

	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	const putFunc = usePut(`cart/${cartId}/`);

	const minusPutData = {
		product_id: id,
		quantity: count - 1,
		is_active: true, // 장바구니 내 상품 활성화 버튼, 같이 보내지 않으면 False
	};

	const plusPutData = {
		product_id: id,
		quantity: count + 1,
		is_active: true,
	};

	return (
		<ControllButtonFrame>
			<MinusButton
				onClick={() => {
					if (count > 1) {
						dispatch(minusPrice(price * count));
						cartEdit(putFunc, minusPutData, token);
						setCount(count - 1);
					}

					if (!btnCheck) {
						dispatch(
							notSelected({
								item: -price * count,
								fee: -fee,
							})
						);
						dispatch(
							notSelected({
								item: price * (count - 1),
								fee: fee,
							})
						);
					}
				}}
			/>
			<CountButton>
				<CountText>{count}</CountText>
			</CountButton>
			<PlusButton
				onClick={() => {
					dispatch(minusPrice(price * count));
					cartEdit(putFunc, plusPutData, token);
					setCount(count + 1);

					if (!btnCheck) {
						dispatch(
							notSelected({
								item: -price * count,
								fee: -fee,
							})
						);
						dispatch(
							notSelected({
								item: price * (count + 1),
								fee: fee,
							})
						);
					}
				}}
			/>
		</ControllButtonFrame>
	);
}
