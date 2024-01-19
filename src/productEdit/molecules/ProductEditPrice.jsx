import React, { useEffect, useState } from 'react';
import GrayTitleText from '../../ProductRegistration/atoms/GrayTitleText';
import FlexInputLayout from '../../ProductRegistration/atoms/FlexInputLayout';
import ProductInputSmall from '../../ProductRegistration/atoms/ProductInputSmall';
import GrayPriceBox from '../../ProductRegistration/atoms/GrayPriceBox';
import { useFormContext } from 'react-hook-form';

export default function ProductEditPrice(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [price, setPrice] = useState(props.price);

	return (
		<div>
			<GrayTitleText text="판매가" />
			<FlexInputLayout>
				<ProductInputSmall
					{...register('price')}
					onChange={(e) => {
						setPrice(e.target.value);
					}}
					value={!price ? props.price : price}
				></ProductInputSmall>
				<GrayPriceBox text="원" />
			</FlexInputLayout>
		</div>
	);
}
