import React, { useEffect, useState } from 'react';
import ItemBox from '../atoms/ItemBox';
import RadioButton from '../atoms/RadioButton';
import ItemInfo from '../molecules/ItemInfo';
import CountControllButton from '../../Common/CountcontrollButton';
import ItemPrice from '../molecules/ItemPrice';
import DeleteImg from '../../Common/DeleteImg';
import { useDelete } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function CartItem({ item, change, setChange, cartId }) {
	const [count, setCount] = useState(item.quantity);
	const [btnCheck, setBtnCheck] = useState(true);
	const deleteFunc = useDelete(`cart/${cartId}/`);
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	return (
		<ItemBox>
			<RadioButton btnCheck={btnCheck} setBtnCheck={setBtnCheck} id={item.product_id} cartId={cartId} count={count} />
			<ItemInfo id={item.product_id} />
			<CountControllButton count={count} setCount={setCount} id={item.product_id} cartId={cartId} btnCheck={btnCheck} />
			<ItemPrice count={count} id={item.product_id} change={change} setChange={setChange} />
			<DeleteImg
				onClick={() => {
					deleteFunc(token).then(() => {
						window.location.reload();
					});
				}}
			/>
		</ItemBox>
	);
}
