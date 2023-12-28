import React from 'react';
import FindTextLayout from '../atoms/FindTextLayout';
import { FindText } from '../atoms/FindText';
import DivideBar from '../../Common/DivideBar';
import { useNavigate } from 'react-router-dom';

export default function FindTexts() {
	const navigate = useNavigate();

	return (
		<FindTextLayout>
			<FindText type="button" to="/signup">
				회원가입
			</FindText>
			<DivideBar text="|" fontsize="16px" margin="14px" />
			<FindText type="button">비밀번호 찾기</FindText>
		</FindTextLayout>
	);
}
