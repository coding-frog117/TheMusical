import React, { useEffect, useState } from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import TitleBox from '../molecules/TitleBox';
import CartMain from '../organisms/CartMain';
import PriceBox from '../molecules/PriceBox';
import BigButton from '../atoms/BigButton';
import EmptyCart from '../atoms/EmptyCart';
import { useSelector } from 'react-redux';
import { useGet } from '../../hooks/useFetch';

export default function CartTemplates() {
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});
	const getFunc = useGet(`/cart/`);

	let [arr, setArr] = useState([]);

	useEffect(() => {
		getFunc(token).then((res) => {
			setArr([...res.data.results]);
		});
	}, []);

	return (
		<HomeLayout>
			<PageTitle text="장바구니" />
			<TitleBox />
			{arr.length === 0 ? (
				<EmptyCart />
			) : (
				<>
					<CartMain arr={arr} setArr={setArr} />
					<PriceBox arr={arr} />
					<BigButton text="주문하기" />
				</>
			)}
		</HomeLayout>
	);
}
