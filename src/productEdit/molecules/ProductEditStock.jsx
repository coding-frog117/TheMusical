import React, { useState } from 'react';
import GrayTitleText from '../../ProductRegistration/atoms/GrayTitleText';
import FlexInputLayout from '../../ProductRegistration/atoms/FlexInputLayout';
import ProductInputSmall from '../../ProductRegistration/atoms/ProductInputSmall';
import GrayPriceBox from '../../ProductRegistration/atoms/GrayPriceBox';
import { useFormContext } from 'react-hook-form';

export default function ProductEditStock(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [stock, setStock] = useState(props.stock);

	return (
		<div>
			<GrayTitleText text="재고" />
			<FlexInputLayout>
				<ProductInputSmall
					value={!stock ? props.stock : stock}
					onChange={(e) => {
						setStock(e.target.value);
					}}
					{...register('stock')}
				/>
				<GrayPriceBox text="개" />
			</FlexInputLayout>
		</div>
	);
}
