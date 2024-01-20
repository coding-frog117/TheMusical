import React from 'react';
import ProductLayout from '../atoms/ProductLayout';
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton';
import GetButton from '../atoms/GetButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { constants } from '../../constants/constants';

export default function Buttons(props) {
	const navigator = useNavigate();
	const quantity = props.count;
	const loginType = useSelector((state) => {
		return state.persistedReducer.login_type.value.payload;
	});

	return (
		<ProductLayout gap="14px">
			<JoinWithSignupButton
				onClick={() => {
					if (loginType === 'BUYER') {
						navigator(`/order/${props.id}`, { state: { quantity: quantity, orderKind: 'direct_order' } });
					} else {
						alert(constants.limitedMessage);
					}
				}}
			>
				바로 구매
			</JoinWithSignupButton>
			<GetButton text="장바구니" count={props.count} />
		</ProductLayout>
	);
}
