import React, { useEffect, useState } from 'react';
import ItemTextBox from '../atoms/ItemTextBox';
import Text from '../atoms/Text';
import { useGet } from '../../hooks/useFetch';
import GoodsImg from '../../Common/GoodsImg';
import { useDispatch } from 'react-redux';
import { addFee } from '../../store/deliveryFeeSlice';

export default function ItemInfo(props) {
	const [data, setData] = useState('');
	const getFunc = useGet(`products/${props.id}/`);
	const dispatch = useDispatch();

	useEffect(() => {
		getFunc().then((res) => {
			setData(res.data);
		});
	}, []);

	useEffect(() => {
		if (data !== undefined) {
			dispatch(addFee(data.shipping_fee));
		}
	}, [data, dispatch]);

	return (
		<>
			<GoodsImg size="160px" margin="0 36px 0 40px" src={data.image} />
			<ItemTextBox>
				<Text text={data.store_name} fontSize="14px" color={(props) => props.theme.darkGray} margin="0 0 10px" />
				<Text text={data.product_name} fontSize={(props) => props.theme.md} margin="0 0 10px" />
				<Text
					text={`${Number(data.price).toLocaleString()} 원`}
					fontSize={(props) => props.theme.sm}
					fontWeight={(props) => props.theme.bold}
					margin="0 0 40px"
				/>
				<Text
					text={`택배배송 / ${
						data.shipping_fee === 0 ? '무료배송' : Number(data.shipping_fee).toLocaleString() + '원'
					}`}
					color={(props) => props.theme.darkGray}
					fontSize="14px"
				/>
			</ItemTextBox>
		</>
	);
}
