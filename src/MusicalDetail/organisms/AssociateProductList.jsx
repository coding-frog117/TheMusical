import React, { useCallback, useEffect, useState } from 'react';
import AssoiciateProduct from '../molecules/AssoiciateProduct';
import InlineText from '../../Common/InlineText';
import AssociateListLayout from '../atoms/AssociateListLayout';
import styled from 'styled-components';
import { useGet } from '../../hooks/useFetch';
import AssociateNoneProduct from '../molecules/AssociateNoneProduct';
import axios from 'axios';

const Div = styled.section`
	height: 100%;
`;

export default function AssociateProductList({ name }) {
	const [searchData, setSearchData] = useState([]);

	const callbackData = useCallback(async () => {
		const response = await axios.get(`https://openmarket.weniv.co.kr/products/?search=${name}`);
		console.log(response);
		setSearchData(response.data.results);
	}, [name]);

	useEffect(() => {
		callbackData();
	}, [callbackData]);

	return (
		<Div>
			<InlineText text="관련 상품" fontSize="20px" />
			<AssociateListLayout>
				{searchData.length === 0 ? (
					<AssociateNoneProduct />
				) : (
					searchData.map((item) => {
						return <AssoiciateProduct item={item} />;
					})
				)}
			</AssociateListLayout>
		</Div>
	);
}
