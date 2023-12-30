import React, { useState } from 'react';
import ItemBox from '../atoms/ItemBox';
import RadioButton from '../atoms/RadioButton';
import ItemInfo from '../molecules/ItemInfo';
import CountControllButton from '../../Common/CountcontrollButton';
import ItemPrice from '../molecules/ItemPrice';
import DeleteImg from '../../Common/DeleteImg';

export default function CartItem({ item, index, arr, setArr, change, setChange, cartId }) {
	const [count, setCount] = useState(item.quantity);
	const [btnCheck, setBtnCheck] = useState(true);

	return (
		<ItemBox>
			<RadioButton
				btnCheck={btnCheck}
				setBtnCheck={setBtnCheck}
				id={item.product_id}
				count={count}
				setCount={setCount}
			/>
			<ItemInfo id={item.product_id} />
			<CountControllButton count={count} setCount={setCount} id={item.product_id} cartId={cartId} btnCheck={btnCheck} />
			<ItemPrice count={count} id={item.product_id} change={change} setChange={setChange} />
			<DeleteImg index={index} arr={arr} setArr={setArr} />
		</ItemBox>
	);
}
