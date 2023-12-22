import React from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import ProductInputSmall from '../atoms/ProductInputSmall';
import FlexInputLayout from '../atoms/FlexInputLayout';
import GrayPriceBox from '../atoms/GrayPriceBox';
import { useFormContext } from 'react-hook-form';

export default function DeliveryFee(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<GrayTitleText text="기본 배송비" />
			<FlexInputLayout>
				{props.fee >= 0 ? (
					<ProductInputSmall placeholder={props.fee} />
				) : (
					<ProductInputSmall
						{...register('shipping_fee', {
							required: '배송비를 입력해주세요',
						})}
					/>
				)}
				<GrayPriceBox text="원" />
			</FlexInputLayout>
		</div>
	);
}
