import React from 'react';
import Text from '../../Cart/atoms/Text';
import Border from '../atoms/Border';
import OrderNameInput from '../molecules/OrderNameInput';
import PhoneInput from '../molecules/PhoneInput';
import OrderEmailInput from '../molecules/OrderEmailInput';
import OrderAddressBox from '../molecules/OrderAddressBox';
import DeliveryMessage from '../molecules/DeliveryMessage';
import { useFormContext } from 'react-hook-form';
import OrdererInput from '../molecules/OrdererInput';
import OrdererPhoneInput from '../molecules/OrdererPhoneInput';

export default function DeliveryInfo() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<>
			<Text text="배송정보" fontSize={(props) => props.theme.xLg} fontWeight="500" />
			<Border height="2px" margin="18px 0 40px" />

			<Text text="주문자 정보" fontSize={(props) => props.theme.md} fontWeight="500" />
			<Border height="2px" margin="8px 0 0" />
			<OrdererInput />
			<OrdererPhoneInput />
			<OrderEmailInput />

			<Text text="배송지 정보" fontSize={(props) => props.theme.md} fontWeight="500" margin="40px 0 0" />
			<Border height="2px" margin="8px 0 0" />
			<OrderNameInput />
			<PhoneInput />
			<OrderAddressBox />
			<DeliveryMessage />
		</>
	);
}
