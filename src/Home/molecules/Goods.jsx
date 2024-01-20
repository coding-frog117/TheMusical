import React, { useState, useEffect } from 'react';
import GoodsImg from '../../Common/GoodsImg';
import GoodsSeller from '../atoms/GoodsSeller';
import GoodsName from '../atoms/GoodsName';
import GoodsPrice from '../atoms/GoodsPrice';
import GoodsPriceCount from '../../Common/GoodsPriceCount';
import { useGet } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
	cursor: pointer;
`;

export default function Goods() {
	const IDENTIFY_WORD = '(TheMusical)';
	const [itemList, setItemList] = useState([]);

	const getFunc = useGet('/products/');
	const navigator = useNavigate();

	useEffect(() => {
		getFunc().then((res) => {
			setItemList(...[res.data.results]);
		});
	}, []);

	return (
		<>
			{itemList.map((item) => (
				<>
					{item.product_info.includes(IDENTIFY_WORD) ? (
						<Li
							key={item.product_id}
							onClick={() => {
								navigator(`/productDetail/${item.product_id}`);
							}}
						>
							<GoodsImg size="380px" margin="0 0 16px" src={item.image} />
							<GoodsSeller text={item.store_name} />
							<GoodsName text={item.product_name} />
							<GoodsPrice text={item.price} />
							<GoodsPriceCount />
						</Li>
					) : null}
				</>
			))}
		</>
	);
}
