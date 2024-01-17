import React from 'react';
import { AssociateProductText } from '../atoms/AssociateProductText';
import { ProductLayout } from '../atoms/ProductLayout';
import ProductMoveButton from '../atoms/ProductMoveButton';
import { useNavigate } from 'react-router-dom';
import { BannerImg } from '../../Home/atoms/BannerImg';
import AssociateImage from '../atoms/AssociateImage';

export default function AssoiciateProduct({ item }) {
	const navigate = useNavigate();

	return (
		<ProductLayout borderBottom={(props) => props.theme.lightGray}>
			<AssociateImage src={item.image} />
			<AssociateProductText fontSize={(props) => props.theme.md} margin="0 0 7px">
				{item.product_name}
			</AssociateProductText>
			<AssociateProductText fontSize="14px" color={(props) => props.theme.darkGray} padding="0 0 5px">
				{item.price.toLocaleString()}
			</AssociateProductText>
			<AssociateProductText fontSize="14px" color={(props) => props.theme.darkGray} padding="0 0 5px">
				{item.store_name}
			</AssociateProductText>
			<ProductMoveButton
				onClick={() => {
					navigate(`/productDetail/${item.product_id}`);
				}}
			>
				상세 보기
			</ProductMoveButton>
		</ProductLayout>
	);
}
