import React from 'react';
import OrderInputBox from '../atoms/OrderInputBox';
import OrderInputTitle from '../atoms/OrderInputTitle';
import BigBlank from '../atoms/BigBlank';
import { useFormContext } from 'react-hook-form';

export default function DeliveryMessage() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<label htmlFor="address_message">
			<OrderInputBox>
				<OrderInputTitle text="배송 메세지" />
				<BigBlank
					id="address_message"
					{...register('address_message', {
						required: '배송 메세지를 입력해주세요.',
					})}
				/>
				{errors.address_message && <small>{errors.address_message.message}</small>}
			</OrderInputBox>
		</label>
	);
}
