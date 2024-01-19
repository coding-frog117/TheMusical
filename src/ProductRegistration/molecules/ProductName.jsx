import React, { useState } from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import ProductInput from '../atoms/ProductInput';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

export default function ProductName(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<GrayTitleText text="상품명" />
			<ProductInput {...register('product_name', { required: '상품 이름을 입력해주세요' })} />
			<InlineText fontSize="14px" color={(props) => props.theme.lightGray} />
		</div>
	);
}
