import React from 'react';
import MyPageModalLayout from '../atoms/MyPageModalLayout';
import MyPageModalButton from '../atoms/MyPageModalButton';
import { usePost } from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { depositToken } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { depositLoginType } from '../../store/loginTypeSlice';

export default function MyPageModal() {
	const postFunc = usePost('accounts/logout/');
	const dispatch = useDispatch();
	const navigator = useNavigate();

	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	return (
		<MyPageModalLayout>
			<MyPageModalButton
				onClick={() => {
					if (token) {
						navigator('/mypage');
					} else {
						navigator('/login');
					}
				}}
			>
				마이페이지
			</MyPageModalButton>
			<MyPageModalButton
				onClick={() => {
					postFunc().then((res) => {
						dispatch(depositToken(''));
						dispatch(depositLoginType(''));
						alert(res.data.detail);
					});
				}}
			>
				로그아웃
			</MyPageModalButton>
		</MyPageModalLayout>
	);
}
