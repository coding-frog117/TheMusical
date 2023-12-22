import React from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import FlexInputLayout from '../atoms/FlexInputLayout';
import ProductInputSmall from '../atoms/ProductInputSmall';
import GrayPriceBox from '../atoms/GrayPriceBox';
import { useFormContext } from 'react-hook-form';

export default function Stock(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div>
			<GrayTitleText text="재고" />
			<FlexInputLayout>
				{props.stock ? (
					<ProductInputSmall placeholder={props.stock} />
				) : (
					<ProductInputSmall
						{...register('stock', {
							required: '재고 수량을 입력해주세요',
						})}
					/>
				)}
				<GrayPriceBox text="개" />
			</FlexInputLayout>
		</div>
	);
}
