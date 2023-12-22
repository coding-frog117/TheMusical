import React, { useState } from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import ProductInput from '../atoms/ProductInput';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

export default function ProductName(props) {
	const [count, setCount] = useState(0);
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<GrayTitleText text="상품명" />
			{props.name ? (
				<ProductInput
					onChange={(e) => {
						setCount(e.target.value.length);
					}}
					placeholder={props.name}
				></ProductInput>
			) : (
				<ProductInput
					onChange={(e) => {
						setCount(e.target.value.length);
					}}
					{...register('product_name', {
						required: '상품 이름을 입력해주세요',
					})}
				></ProductInput>
			)}

			<InlineText fontSize="14px" color={(props) => props.theme.lightGray} />
		</div>
	);
}
