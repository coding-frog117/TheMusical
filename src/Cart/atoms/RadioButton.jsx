import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useGet } from '../../hooks/useFetch';
import { notSelected } from '../../store/selectedItemSlice';

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

export default function RadioButton({ btnCheck, setBtnCheck, id, count, setCount }) {
	const dispatch = useDispatch();
	const getFunc = useGet(`/products/${id}`);
	const [price, setPrice] = useState();
	const [fee, setFee] = useState();

	useEffect(() => {
		getFunc().then((res) => {
			setPrice(res.data.price);
			setFee(res.data.shipping_fee);
		});
	});

	return (
		<label id="check">
			<Input
				checked={btnCheck}
				type="checkbox"
				for="check"
				value={id}
				onChange={() => {
					if (btnCheck == true) {
						dispatch(
							notSelected({
								item: price * count,
								fee: fee,
							})
						);
					} else {
						dispatch(
							notSelected({
								item: -(price * count),
								fee: -fee,
							})
						);
					}

					setBtnCheck(!btnCheck);
				}}
			/>
		</label>
	);
}
