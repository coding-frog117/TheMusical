import React from 'react';
import styled from 'styled-components';
import { CheckButton } from '../../Common/Signup with Login/Button';
import { useSelector } from 'react-redux';
import { usePost } from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { cartAppend } from '../../apis/cartAppend';
import { useDispatch } from 'react-redux';

const Button = styled(CheckButton)`
	width: 200px;
	height: 60px;
	flex-shrink: 0;
	background-color: ${(props) => props.theme.darkGray};
`;

export default function GetButton(props) {
	const navigator = useNavigate();
	const { id } = useParams();
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});
	const cartId = useSelector((state) => {
		return state.cartItemIdSlice.value;
	});

	const dispatch = useDispatch();

	const postFunc = usePost('/cart/');
	const postData = {
		product_id: id,
		quantity: props.count,
		check: false,
	};

	return (
		<Button
			onClick={() => {
				if (cartId == '') {
					cartAppend(postFunc, postData, token, navigator, dispatch, cartId);
				} else {
					cartAppend(postFunc, postData, token, navigator);
				}
			}}
		>
			{props.text}
		</Button>
	);
}
