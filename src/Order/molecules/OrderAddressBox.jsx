import React, { useEffect, useState } from 'react';
import OrderInputTitle from '../atoms/OrderInputTitle';
import SmallButton from '../../Cart/atoms/SmallButton';
import AddressBlank from '../atoms/AddressBlank';
import BigBlank from '../atoms/BigBlank';
import AddressLayout from '../atoms/FlexLayout';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 8px 0;
	border-bottom: ${(props) => props.theme.lightGray} 1px solid;
`;

export default function OrderAddressBox(props) {
	const open = useDaumPostcodePopup();
	const [zonecode, setZonecode] = useState('');
	const [address, setAddress] = useState('');

	const handleComplete = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		setAddress(fullAddress);
		setZonecode(data.zonecode);
	};

	const handleClick = () => {
		open({ onComplete: handleComplete });
	};

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
							value={zonecode}
							{...register('zonecode', {
								required: '우편번호를 입력해주세요.',
							})}
						/>
						<SmallButton height="40px" bgColor={(props) => props.theme.mainColor} type="button" onClick={handleClick}>
							우편번호 조회
						</SmallButton>
						{errors.zonecode && <small>{errors.zonecode.message}</small>}
					</AddressLayout>
				</AddressLayout>

				<AddressLayout>
					<OrderInputTitle />
					<BigBlank
						value={address}
						{...register('address', {
							required: '배송 주소를 입력해주세요.',
						})}
					/>
					{errors.address && <small>{errors.address.message}</small>}
				</AddressLayout>

				<AddressLayout>
					<OrderInputTitle />
					<BigBlank
						{...register('detail_address', {
							required: '상세 주소를 입력해주세요.',
						})}
					/>
					{errors.detail_address ? <small>{errors.detail_address.message}</small> : null}
				</AddressLayout>
			</Div>
		</label>
	);
}
