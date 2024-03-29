import React from 'react';
import PaymentCheckButton from '../molecules/PaymentCheckButton';
import styled from 'styled-components';

const Ul = styled.ul`
	padding: 18px;
	border-top: ${(props) => props.theme.lightGray} 2px solid;
	border-bottom: ${(props) => props.theme.lightGray} 2px solid;
	margin-top: 18px;
`;

export default function PaymentList() {
	return (
		<Ul>
			<PaymentCheckButton text=" 신용/체크카드" id="CARD" />
			<PaymentCheckButton text=" 무통장입금" id="DEPOSIT" />
			<PaymentCheckButton text=" 휴대폰 결제" id="PHONE_PAYMENT" />
			<PaymentCheckButton text=" 네이버페이" id="NAVERPAY" />
			<PaymentCheckButton text=" 카카오페이" id="KAKAOPAY" />
		</Ul>
	);
}
