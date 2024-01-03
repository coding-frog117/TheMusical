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
		<label htmlFor="address">
			<Div>
				<AddressLayout>
					<OrderInputTitle text="배송주소" />

					<AddressLayout>
						<AddressBlank
							id="address"
							{...register('address_number', {
								required: '우편번호를 입력해주세요.',
							})}
						/>
						<SmallButton text="우편번호 조회" height="40px" bgColor={(props) => props.theme.mainColor} />
						{errors.address_number && <small>{errors.address_number.message}</small>}
					</AddressLayout>
				</AddressLayout>

				<AddressLayout>
					<OrderInputTitle />
					<BigBlank
						{...register('address_first', {
							required: '배송 주소를 입력해주세요.',
						})}
					/>
					{errors.address_first && <small>{errors.address_first.message}</small>}
				</AddressLayout>

				<AddressLayout>
					<OrderInputTitle />
					<BigBlank
						{...register('address_second', {
							required: '상세 주소를 입력해주세요.',
						})}
					/>
					{errors.address_second ? <small>{errors.address_second.message}</small> : null}
				</AddressLayout>
			</Div>
		</label>
	);
}
