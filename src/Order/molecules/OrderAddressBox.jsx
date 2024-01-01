import React from 'react';
import OrderInputBox from '../atoms/OrderInputBox';
import OrderInputTitle from '../atoms/OrderInputTitle';
import SmallButton from '../../Cart/atoms/SmallButton';
import AddressBlank from '../atoms/AddressBlank';
import BigBlank from '../atoms/BigBlank';
import AddressLayout from '../atoms/FlexLayout';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px 0;
	border-bottom: ${(props) => props.theme.lightGray} 1px solid;
`;

export default function OrderAddressBox() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<Div>
			{/* <label htmlFor="address"> */}
			<AddressLayout>
				<OrderInputTitle text="배송주소" />

				<AddressLayout>
					<AddressBlank
						id="address"
						{...register('address', {
							required: '배송 주소를 입력해주세요.',
						})}
					/>
					<SmallButton text="우편번호 조회" height="40px" bgColor={(props) => props.theme.mainColor} />
				</AddressLayout>
			</AddressLayout>

			<AddressLayout>
				<OrderInputTitle />
				<BigBlank
					{...register('address', {
						required: '배송 주소를 입력해주세요.',
					})}
				/>
			</AddressLayout>

			<AddressLayout>
				<OrderInputTitle />
				<BigBlank
					{...register('address', {
						required: '배송 주소를 입력해주세요.',
					})}
				/>
			</AddressLayout>
			{errors.address && <small>{errors.address.message}</small>}
			{/* </label> */}
		</Div>
	);
}
