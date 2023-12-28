import React, { useState } from 'react';
import ItemBox from '../atoms/ItemBox';
import RadioButton from '../atoms/RadioButton';
import ItemInfo from '../molecules/ItemInfo';
import CountControllButton from '../../Common/CountcontrollButton';
import ItemPrice from '../molecules/ItemPrice';
import DeleteImg from '../../Common/DeleteImg';

export default function CartItem({ item, index, arr, setArr, change, setChange }) {
	const [count, setCount] = useState(arr[index].quantity);
	const [btnCheck, setBtnCheck] = useState(true);

	return (
		<ItemBox>
			<RadioButton btnCheck={btnCheck} setBtnCheck={setBtnCheck} id={item.product_id} />
			<ItemInfo id={item.product_id} />
			<CountControllButton count={count} setCount={setCount} />
			<ItemPrice count={count} id={item.product_id} change={change} setChange={setChange} />
			<DeleteImg index={index} arr={arr} setArr={setArr} />
		</ItemBox>
	);
}
