import React from 'react';
import OrderInputBox from '../atoms/OrderInputBox';
import SmallBlank from '../atoms/SmallBlank';
import OrderInputTitle from '../atoms/OrderInputTitle';
import InlineText from '../../Common/InlineText';
import { useFormContext } from 'react-hook-form';

export default function OrdererPhoneInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<OrderInputBox>
			<OrderInputTitle text="휴대폰" />
			<label htmlFor="orderer_phone_number">
				<SmallBlank
					id="orderer_phone_number"
					{...register('orderer_phone_number_first', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('orderer_phone_number_second', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('orderer_phone_number_third', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				{errors.orderer_phone_number_first ? (
					<small>{errors.orderer_phone_number_first.message}</small>
				) : errors.orderer_phone_number_second ? (
					<small>{errors.orderer_phone_number_second.message}</small>
				) : errors.orderer_phone_number_third ? (
					<small>{errors.orderer_phone_number_third.message}</small>
				) : null}
			</label>
		</OrderInputBox>
	);
}
