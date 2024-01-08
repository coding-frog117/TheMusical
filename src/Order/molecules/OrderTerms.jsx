import React from 'react';
import { TermsInp } from '../../Common/Terms';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';
import AddressLayout from '../atoms/FlexLayout';
import { useFormContext } from 'react-hook-form';

const Div = styled(AddressLayout)`
	margin: 0 0 30px;
`;

export default function OrderTerms() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<Div>
			<label htmlFor="terms">
				<TermsInp
					id="terms"
					type="checkbox"
					{...register('terms', {
						required: '주문 내용을 확인하고 체크해주세요.',
					})}
				/>
				<InlineText text="주문 내용을 확인하였고 동의합니다." fontSize="16px" />
				{errors.terms && <small>{errors.terms.message}</small>}
			</label>
		</Div>
	);
}
