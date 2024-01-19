import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import GrayTitleText from '../../ProductRegistration/atoms/GrayTitleText';
import ProductInput from '../../ProductRegistration/atoms/ProductInput';

export default function ProductEditName(props) {
	const { register } = useFormContext();
	const [name, setName] = useState(props.name);

	return (
		<div>
			<GrayTitleText text="상품명" />
			<ProductInput
				value={!name ? props.name : name}
				{...register('product_name')}
				onChange={(e) => {
					setName(e.target.value);
				}}
			></ProductInput>
		</div>
	);
}
