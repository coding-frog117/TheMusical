import React from 'react';
import { AssociateProductText } from '../atoms/AssociateProductText';
import { ProductLayout } from '../atoms/ProductLayout';
import ProductMoveButton from '../atoms/ProductMoveButton';

export default function AssoiciateProduct(props) {
	return (
		<ProductLayout borderBottom={(props) => props.theme.lightGray}>
			<AssociateProductText fontSize={(props) => props.theme.md} margin="0 0 7px">
				레미제라블 프로그램북
			</AssociateProductText>
			<AssociateProductText fontSize="14px" color={(props) => props.theme.darkGray} padding="0 0 5px">
				10000원
			</AssociateProductText>
			<AssociateProductText fontSize="14px" color={(props) => props.theme.darkGray} padding="0 0 5px">
				개굴스토어
			</AssociateProductText>
			<ProductMoveButton>상세 보기</ProductMoveButton>
		</ProductLayout>
	);
}
