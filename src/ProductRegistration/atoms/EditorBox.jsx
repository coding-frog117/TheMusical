import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Div = styled.div`
	width: 100%;
	height: 700px;
	background-color: ${(props) => props.theme.whiteGray};
	text-align: center;
	color: ${(props) => props.theme.lightGray};
	font-size: 48px;
	padding: 320px 544px;
	cursor: pointer;
`;

const TextArea = styled.textarea`
	width: 100%;
	font-size: ${(props) => props.theme.md};
`;

export default function EditorBox(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [text, setText] = useState(false);

	return (
		<>
			{props.info != undefined ? (
				<TextArea {...register('product_info')}>{props.info}</TextArea>
			) : text === true ? (
				<TextArea
					{...register('product_info', {
						required: '상세정보를 입력해주세요',
					})}
				/>
			) : (
				<Div
					onClick={() => {
						setText(true);
					}}
				>
					{props.text}
				</Div>
			)}
		</>
	);
}
