import React, { useState } from 'react';
import GrayTitleText from '../../ProductRegistration/atoms/GrayTitleText';
import FlexInputLayout from '../../ProductRegistration/atoms/FlexInputLayout';
import ProductInputSmall from '../../ProductRegistration/atoms/ProductInputSmall';
import GrayPriceBox from '../../ProductRegistration/atoms/GrayPriceBox';
import { useFormContext } from 'react-hook-form';

export default function ProductEditDelliveryFee(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [fee, setFee] = useState(props.fee);

	return (
		<div>
			<GrayTitleText text="기본 배송비" />
			<FlexInputLayout>
				<ProductInputSmall
					value={fee ? fee : props.fee}
					{...register('shipping_fee')}
					onChange={(e) => {
						setFee(e.target.value);
					}}
				/>
				<GrayPriceBox text="원" />
			</FlexInputLayout>
		</div>
	);
}
