import React, { useEffect, useState } from 'react';
import CartMainBox from '../atoms/CartMainBox';
import CartItem from './CartItem';
import { useGet } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function CartMain(props) {
	const [change, setChange] = useState(0);
	let [arr, setArr] = useState([]);
	const getFunc = useGet('cart');

	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	useEffect(() => {
		getFunc(token).then((res) => {
			setArr([...res.data.results]);
		});
	}, []);

	return (
		<CartMainBox>
			{arr.map((item) => {
				return <CartItem item={item} change={change} setChange={setChange} cartId={item.cart_item_id} />;
			})}
		</CartMainBox>
	);
}
