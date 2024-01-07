import React from 'react';
import styled from 'styled-components';
import BigButton from '../../Cart/atoms/BigButton';
import OrderTerms from './OrderTerms';

const Div = styled.section`
	width: 100%;
	height: 182px;
	background-color: ${(props) => props.theme.whiteGray};
	padding: 30px 30px 34px;
`;

export default function PaymentBottom() {
	return (
		<Div>
			<OrderTerms />
			<BigButton>결제하기</BigButton>
		</Div>
	);
}
