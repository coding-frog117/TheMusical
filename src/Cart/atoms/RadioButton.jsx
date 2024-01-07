import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useGet, usePut } from '../../hooks/useFetch';
import { notSelected } from '../../store/selectedItemSlice';
import { cartEdit } from '../../apis/cartEdit';

export const Input = styled.input`
	appearance: none;
	border: 2px solid ${(props) => props.theme.mainColor};
	border-radius: 50%;
	width: 20px;
	height: 20px;
	vertical-align: top;

	&:focus-visible {
		outline-offset: 2px;
		outline: 2px dotted ${(props) => props.theme.mainColor};
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 0 4px lightgray;
	}

	&:checked {
		outline: 2px solid ${(props) => props.theme.mainColor};
		border: 3px solid #fff;
		background-color: ${(props) => props.theme.mainColor};
	}
`;

export default function RadioButton(props) {
	const dispatch = useDispatch();
	const allSelect = useSelector((state) => {
		return state.cartAllSelectSlice.value;
	});
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	const getFunc = useGet(`/products/${props.id}/`);
	const putFunc = usePut(`/cart/${props.cartId}/`);

	const [price, setPrice] = useState('');
	const [fee, setFee] = useState('');

	const putData = {
		product_id: props.id,
		quantity: props.count,
		is_active: !props.btnCheck,
	};

	const allSelectData = {
		product_id: props.id,
		quantity: props.count,
		is_active: allSelect,
	};

	useEffect(() => {
		getFunc().then((res) => {
			setPrice(res.data.price);
			setFee(res.data.shipping_fee);
		});
	});

	useEffect(() => {
		props.setBtnCheck(allSelect);
		cartEdit(putFunc, allSelectData, token);
	}, [allSelect]);

	return (
		<label id="check">
			<Input
				checked={props.btnCheck}
				type="checkbox"
				for="check"
				value={props.id}
				onChange={() => {
					if (props.btnCheck == true) {
						dispatch(
							notSelected({
								item: price * props.count,
								fee: fee,
							})
						);
						cartEdit(putFunc, putData, token);
					} else {
						dispatch(
							notSelected({
								item: -(price * props.count),
								fee: -fee,
							})
						);
						cartEdit(putFunc, putData, token);
					}

					props.setBtnCheck(!props.btnCheck);
				}}
			/>
		</label>
	);
}
