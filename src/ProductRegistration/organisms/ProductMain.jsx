import React, { useState } from 'react';
import ProductImgAndInfo from './ProductImgAndInfo';
import ProductDetail from '../molecules/ProductDetail';
import SaveAndCancelBtn from '../molecules/SaveAndCancelBtn';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { usePost, useDelete } from '../../hooks/useFetch';
import { productRegist } from '../../apis/productRegist';
import { useSelector } from 'react-redux';
import { constants } from '../../constants/constants';

const Form = styled.form`
	margin: 0 auto;
`;

export default function ProductMain() {
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});
	const formData = new FormData();

	const methods = useForm();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;
	const [image, setImage] = useState('');

	const postFunc = usePost('products/');

	return (
		<>
			<FormProvider {...methods} htmlFor="product">
				<Form
					onSubmit={handleSubmit((data) => {
						formData.append('image', image);

						const keys = Object.keys(data);

						for (let i = 0; i < keys.length; i++) {
							const key = keys[i];
							const value = data[key];

							if (key !== 'image') {
								formData.append(key, value);
							}
							if (key === 'product_info') {
								formData.append(key, constants.IDENTIFY_WORD + value);
							}
						}

						productRegist(formData, postFunc, token);
					})}
				>
					<ProductImgAndInfo image={image} setImage={setImage} />
					<ProductDetail />
					<SaveAndCancelBtn />
				</Form>
			</FormProvider>
		</>
	);
}
