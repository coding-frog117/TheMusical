import React from 'react';
import styled from 'styled-components';
import PaymentText from '../molecules/PaymentText';
import Border from '../atoms/Border';
import { useLocation } from 'react-router-dom';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 34px 30px 20px;
`;

export default function PaymentTop() {
	const location = useLocation();
	const { state } = location;

	return (
		<Div>
			<PaymentText text1="-상품금액" text2={Number(state.data.price * state.quantity).toLocaleString() + '원'} />
			<PaymentText text1="-할인금액" text2="0원" />
			<PaymentText text1="-배송비" text2={Number(state.data.shipping_fee).toLocaleString() + '원'} />
			<Border margin="0 0 10px 0" />
			<PaymentText
				text1="-결제금액"
				text2={Number(state.data.price * state.quantity + state.data.shipping_fee).toLocaleString() + '원'}
				color2={(props) => props.theme.red}
				fontSize2={(props) => props.theme.xLg}
			/>
		</Div>
	);
}
