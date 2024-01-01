import React from 'react';
import ProductLayout from '../atoms/ProductLayout';
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton';
import GetButton from '../atoms/GetButton';
import { useNavigate } from 'react-router-dom';

export default function Buttons(props) {
	const navigator = useNavigate();
	const quantity = props.count;
	const data = props.data;

	return (
		<ProductLayout gap="14px">
			<JoinWithSignupButton
				onClick={() => {
					navigator('/order', { state: { quantity: quantity, data: data } });
				}}
			>
				바로 구매
			</JoinWithSignupButton>
			<GetButton text="장바구니" count={props.count} />
		</ProductLayout>
	);
}
