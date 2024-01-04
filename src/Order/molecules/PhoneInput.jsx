import React from 'react';
import SmallBlank from '../atoms/SmallBlank';
import InlineText from '../../Common/InlineText';
import OrderInputBox from '../atoms/OrderInputBox';
import OrderInputTitle from '../atoms/OrderInputTitle';
import { useFormContext } from 'react-hook-form';

export default function PhoneInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<OrderInputBox>
			<OrderInputTitle text="휴대폰" />
			<label htmlFor="receiver_phone_number">
				<SmallBlank
					id="receiver_phone_number"
					{...register('receiver_phone_number_first', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('receiver_phone_number_second', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('receiver_phone_number_third', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				{errors.receiver_phone_number_first ? (
					<small>{errors.receiver_phone_number_first.message}</small>
				) : errors.receiver_phone_number_second ? (
					<small>{errors.receiver_phone_number_second.message}</small>
				) : errors.receiver_phone_number_third ? (
					<small>{errors.receiver_phone_number_third.message}</small>
				) : null}
			</label>
		</OrderInputBox>
	);
}
