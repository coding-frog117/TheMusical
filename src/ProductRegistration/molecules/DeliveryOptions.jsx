/* eslint-disable no-unused-expressions */
import { React, useEffect, useState } from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import { set, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import SelectGreenButton from '../atoms/SelectGreenButton';
import SelectWhiteButton from '../atoms/SelectWhiteButton';

const ParcelButton = styled(SelectGreenButton)`
	height: 54px;
	margin: 0 10px 0 0;
	border: 3px solid ${(props) => props.parcelBorder};
`;

const DeliveryButton = styled(SelectWhiteButton)`
	height: 54px;
	border: ${(props) => props.deliveryBorder};
`;

export default function DeliveryOptions(props) {
	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext();

	const [delivery, setDelivery] = useState(props.method);
	const [parcelBorder, setParcelBorder] = useState('');
	const [deliveryBorder, setDeliveryBorder] = useState('');

	return (
		<div>
			<GrayTitleText text="배송방법" />
			<ParcelButton
				{...register('shipping_method', {
					required: '배송 옵션을 선택해주세요',
				})}
				{...setValue('shipping_method', delivery)}
				parcelBorder={parcelBorder}
				onClick={() => {
					setDelivery('PARCEL');
					setParcelBorder('yellow');
					setDeliveryBorder('');
				}}
			>
				"택배, 소포, 등기"
			</ParcelButton>

			<DeliveryButton
				deliveryBorder={deliveryBorder}
				onClick={() => {
					setDelivery('DELIVERY');
					setDeliveryBorder('3px solid yellow');
					setParcelBorder('');
				}}
			>
				"직접배송(화물배달)"
			</DeliveryButton>
		</div>
	);
}
