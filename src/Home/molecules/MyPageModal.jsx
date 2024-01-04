import React from 'react';
import MyPageModalLayout from '../atoms/MyPageModalLayout';
import MyPageModalButton from '../atoms/MyPageModalButton';
import { useNavigate } from 'react-router-dom';

export default function MyPageModal() {
	const navigator = useNavigate();

	return (
		<MyPageModalLayout>
			<MyPageModalButton
				onClick={() => {
					navigator('/mypage');
				}}
			>
				마이페이지
			</MyPageModalButton>
			<MyPageModalButton>로그아웃</MyPageModalButton>
		</MyPageModalLayout>
	);
}
