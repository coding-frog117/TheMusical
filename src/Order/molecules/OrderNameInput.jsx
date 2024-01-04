import React from 'react';
import OrderInputBox from '../atoms/OrderInputBox';
import MiddleBlank from '../atoms/MiddleBlank';
import OrderInputTitle from '../atoms/OrderInputTitle';
import { useFormContext } from 'react-hook-form';

export default function OrderNameInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<OrderInputBox>
			<OrderInputTitle text="이름" />
			<label htmlFor="receiver">
				<MiddleBlank
					id="receiver"
					{...register('receiver', {
						required: '이름을 입력해주세요',
					})}
				/>
				{errors.receiver && <small>{errors.receiver.message}</small>}
			</label>
		</OrderInputBox>
	);
}
