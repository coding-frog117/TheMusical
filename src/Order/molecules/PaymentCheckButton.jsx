import React, { useState } from 'react';
import PayButton from '../atoms/PayButton';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const Li = styled.li`
	margin-right: 20px;
	display: inline;
`;

export default function PaymentCheckButton(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<Li>
			<PayButton
				type="radio"
				name="payment"
				value={props.id}
				{...register('payment_method', {
					required: '결제수단을 선택해주세요.',
				})}
			/>
			<InlineText text={props.text} fontSize={(props) => props.theme.sm} />
		</Li>
	);
}
