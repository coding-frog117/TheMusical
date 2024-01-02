import React from 'react';
import Text from '../../Cart/atoms/Text';
import Paymentbox from '../atoms/Paymentbox';
import PaymentTop from './PaymentTop';
import PaymentBottom from '../molecules/PaymentBottom';

export default function PayTotalInfo() {
	return (
		<span>
			<Text text="최종결제정보" fontSize={(props) => props.theme.xLg} fontWeight="500" />

			<Paymentbox>
				<PaymentTop />
				<PaymentBottom />
			</Paymentbox>
		</span>
	);
}
