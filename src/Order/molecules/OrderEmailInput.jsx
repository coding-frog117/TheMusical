import React from 'react';
import MiddleBlank from '../atoms/MiddleBlank';
import OrderInputTitle from '../atoms/OrderInputTitle';
import OrderInputBox from '../atoms/OrderInputBox';
import { useFormContext } from 'react-hook-form';

export default function OrderEmailInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<label htmlFor="email">
			<OrderInputBox>
				<OrderInputTitle text="이메일" />
				<MiddleBlank
					id="email"
					{...register('email', {
						required: '이메일을 입력해주세요',
					})}
				/>
				{errors.email && <small>{errors.email.message}</small>}
			</OrderInputBox>
		</label>
	);
}
