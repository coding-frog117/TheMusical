import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGet } from '../../hooks/useFetch';
import PaymentText from '../molecules/PaymentText';
import Border from '../atoms/Border';
import { Div } from './PaymentTop';

export default function OnePaymentTop() {
	const { id } = useParams();
	const getFunc = useGet(`products/${id}`);
	const [data, setData] = useState([]);
	const location = useLocation();
	const { state } = location;

	useEffect(() => {
		getFunc().then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<Div>
			<PaymentText text1="-상품금액" text2={Number(data.price * state.quantity).toLocaleString() + '원'} />
			<PaymentText text1="-할인금액" text2="0원" />
			<PaymentText text1="-배송비" text2={Number(data.shipping_fee).toLocaleString() + '원'} />
			<Border margin="0 0 10px 0" />
			<PaymentText
				text1="-결제금액"
				text2={Number(data.price * state.quantity + data.shipping_fee).toLocaleString() + '원'}
				color2={(props) => props.theme.red}
				fontSize2={(props) => props.theme.xLg}
			/>
		</Div>
	);
}
