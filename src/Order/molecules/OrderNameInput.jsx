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
			<label htmlFor="reciever">
				<MiddleBlank
					id="reciever"
					{...register('reciever', {
						required: '이름을 입력해주세요',
					})}
				/>
				{errors.reciever && <small>{errors.reciever.message}</small>}
			</label>
		</OrderInputBox>
	);
}
