import React from 'react';
import OrderInputBox from '../atoms/OrderInputBox';
import MiddleBlank from '../atoms/MiddleBlank';
import OrderInputTitle from '../atoms/OrderInputTitle';
import { useFormContext } from 'react-hook-form';

export default function OrdererInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<OrderInputBox>
			<OrderInputTitle text="이름" />
			<label htmlFor="orderer">
				<MiddleBlank
					id="orderer"
					{...register('orderer', {
						required: '이름을 입력해주세요',
					})}
				/>
				{errors.orderer && <small>{errors.orderer.message}</small>}
			</label>
		</OrderInputBox>
	);
}
