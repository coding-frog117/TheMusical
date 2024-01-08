import React, { useEffect, useState } from 'react';
import ItemPriceBox from '../atoms/ItemPriceBox';
import PriceText from '../atoms/PriceText';
import SmallButton from '../atoms/SmallButton';
import { useGet } from '../../hooks/useFetch';
import { changePrice } from '../../store/totalCartPriceSlice';
import { useDispatch } from 'react-redux';

export default function ItemPrice(props) {
	const getFunc = useGet(`products/${props.id}`);
	const [price, setPrice] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		getFunc().then((res) => {
			return setPrice(res.data.price);
		});
	}, []);

	useEffect(() => {
		if (props.count) {
			dispatch(changePrice(Number(props.count * price)));
		}
	}, [props.count, dispatch, price]);

	return (
		<ItemPriceBox>
			<PriceText text={`${Number(props.count * price).toLocaleString()} 원`} />
			<SmallButton
				text="주문하기"
				height="40px"
				bgColor={(props) => props.theme.mainColor}
				id={props.id}
				count={props.count}
			/>
		</ItemPriceBox>
	);
}
