import React, { useState } from 'react';
import CartMainBox from '../atoms/CartMainBox';
import CartItem from './CartItem';

export default function CartMain(props) {
	const [change, setChange] = useState(0);

	return (
		<CartMainBox>
			{props.arr.map((item, index) => {
				return (
					<CartItem
						item={item}
						index={index}
						arr={props.arr}
						setArr={props.setArr}
						change={change}
						setChange={setChange}
					/>
				);
			})}
		</CartMainBox>
	);
}
