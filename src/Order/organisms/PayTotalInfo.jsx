import React from 'react';
import Text from '../../Cart/atoms/Text';
import Paymentbox from '../atoms/Paymentbox';
import PaymentTop from './PaymentTop';
import PaymentBottom from '../molecules/PaymentBottom';
import OnePaymentTop from './OnePaymentTop';
import { useParams } from 'react-router-dom';

export default function PayTotalInfo() {
	const { id } = useParams();

	return (
		<span>
			<Text text="최종결제정보" fontSize={(props) => props.theme.xLg} fontWeight="500" />
			<Paymentbox>
				{id === undefined ? <PaymentTop /> : <OnePaymentTop />}
				<PaymentBottom />
			</Paymentbox>
		</span>
	);
}
