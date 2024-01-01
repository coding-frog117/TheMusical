import React from 'react';
import styled from 'styled-components';
import Text from '../../Cart/atoms/Text';
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
			<label htmlFor="reciever_phone_number">
				<SmallBlank
					id="reciever_phone_number"
					{...register('reciever_phone_number', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('reciever_phone_number', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				<InlineText text="-" margin="0 10px" />
				<SmallBlank
					{...register('reciever_phone_number', {
						required: '휴대폰 번호를 입력해주세요',
					})}
				/>
				{errors.reciever && <small>{errors.reciever.message}</small>}
			</label>
		</OrderInputBox>
	);
}
