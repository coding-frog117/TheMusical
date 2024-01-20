import React, { useState, useEffect } from 'react';
import ProductImgAndInfo from '../../ProductRegistration/organisms/ProductImgAndInfo';
import ProductDetail from '../../ProductRegistration/molecules/ProductDetail';
import SaveAndCancelBtn from '../../ProductRegistration/molecules/SaveAndCancelBtn';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { useGet, usePut } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productEdit } from '../../apis/productEdit';
import { constants } from '../../constants/constants';
import EditImageAndInfo from './EditImageAndInfo';

const Form = styled.form`
	margin: 0 auto;
	width: 1320px;
`;

export default function EditMain() {
	const { id } = useParams();
	const getFunc = useGet(`products/${id}/`);
	const putFunc = usePut(`products/${id}/`);
	const [originData, setOriginData] = useState('');
	const [editImage, setEditImage] = useState('');

	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	useEffect(() => {
		getFunc().then((res) => {
			setOriginData(res.data);
			setEditImage(res.data.image);
		});
	}, []);

	const formData = new FormData();

	const methods = useForm();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	return (
		<>
			<FormProvider {...methods} htmlFor="product">
				<Form
					onSubmit={handleSubmit((data) => {
						const keys = Object.keys(data);

						for (let i = 0; i < keys.length; i++) {
							const key = keys[i];
							const value = data[key];

							if (key !== 'image' && value !== '') {
								formData.append(key, value);
							}
							if (key === 'product_info' && value !== '') {
								formData.append(key, constants.IDENTIFY_WORD + value);
							}
						}
						console.log(formData);

						productEdit(formData, putFunc, token);
					})}
				>
					<EditImageAndInfo editImage={editImage} data={originData} />
					<ProductDetail info={originData.product_info} />
					<SaveAndCancelBtn />
				</Form>
			</FormProvider>
		</>
	);
}
