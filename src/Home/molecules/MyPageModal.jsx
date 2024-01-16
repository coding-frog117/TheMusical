import React from 'react';
import MyPageModalLayout from '../atoms/MyPageModalLayout';
import MyPageModalButton from '../atoms/MyPageModalButton';
import { usePost } from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { depositToken } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

export default function MyPageModal() {
	const postFunc = usePost('accounts/logout/');
	const dispatch = useDispatch();
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
			<MyPageModalButton
				onClick={() => {
					postFunc().then((res) => {
						dispatch(depositToken(''));
						alert(res.data.detail);
					});
				}}
			>
				로그아웃
			</MyPageModalButton>
		</MyPageModalLayout>
	);
}
