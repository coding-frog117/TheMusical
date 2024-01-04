import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../assets/icon-shopping-cart.svg';
import IconOn from '../../assets/icon-shopping-cart-2.svg';
import { useNavigate } from 'react-router-dom';

const Cart = styled.img`
	width: 46px;
	height: 36px;
	position: relative;
	right: 2px;
`;

export default function CartOff() {
	const [IconSrc, setIconSrc] = useState(false);
	const navigator = useNavigate();

	return (
		<Cart
			src={IconSrc === false ? Icon : IconOn}
			onClick={() => {
				setIconSrc(IconSrc === false ? true : false);
				navigator('/cart');
			}}
		/>
	);
}
