import React from 'react';
import GrayPriceBox from '../atoms/GrayPriceBox';
import FlexInputLayout from '../atoms/FlexInputLayout';
import ProductInputSmall from '../atoms/ProductInputSmall';
import GrayTitleText from '../atoms/GrayTitleText';
import { useFormContext } from 'react-hook-form';

export default function ProductPrice() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div>
			<GrayTitleText text="판매가" />
			<FlexInputLayout>
				<ProductInputSmall
					{...register('price', {
						required: '상품 가격을 입력해주세요',
					})}
				/>
				<GrayPriceBox text="원" />
			</FlexInputLayout>
		</div>
	);
}
