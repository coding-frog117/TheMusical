import React from 'react';
import styled from 'styled-components';
import PaymentText from '../molecules/PaymentText';
import Border from '../atoms/Border';
import { useSelector } from 'react-redux';

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 34px 30px 20px;
`;

export default function PaymentTop() {
	const itemPrice = useSelector((state) => {
		return state.totalCartPriceSlice.value - state.selectedItemSlice.item;
	});

	const fee = useSelector((state) => {
		return state.deliveryFeeSlice.value - state.selectedItemSlice.fee;
	});

	return (
		<Div>
			<PaymentText text1="-상품금액" text2={itemPrice.toLocaleString() + '원'} />
			<PaymentText text1="-할인금액" text2="0원" />
			<PaymentText text1="-배송비" text2={fee.toLocaleString() + '원'} />
			<Border margin="0 0 10px 0" />
			<PaymentText
				text1="-결제금액"
				text2={Number(itemPrice + fee).toLocaleString() + '원'}
				color2={(props) => props.theme.red}
				fontSize2={(props) => props.theme.xLg}
			/>
		</Div>
	);
}
