import React, { useEffect, useRef } from 'react';
import ModalBackdrop from '../../Common/Modal/ModalBackdrop';
import ModalFrame from '../../Common/Modal/ModalFrame';
import DeleteImg from '../../Common/DeleteImg';
import ModalText from '../../Common/Modal/ModalText';
import ModalLayout from '../../Common/Modal/ModalLayout';
import ModalWhiteButton from '../../Common/Modal/ModalWhiteButton';
import ModalGreenButton from '../../Common/Modal/ModalGreenButton';
import { cartAllDelete } from '../../apis/cartAllDelete';
import { useDelete } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function AllDeleteModal(props) {
	const modalDeleteRef = useRef();
	const deleteFunc = useDelete('cart');
	const token = useSelector((state) => state.persistedReducer.token.value);

	useEffect(() => {
		const handler = (e) => {
			if (modalDeleteRef.current && !modalDeleteRef.current.contains(e.target)) {
				props.setModal(false);
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<ModalBackdrop>
			<ModalFrame ref={modalDeleteRef}>
				<DeleteImg
					onClick={() => {
						props.setModal(false);
					}}
				/>
				<ModalText text="장바구니를 비우시겠습니까?" mgTop="42px" />
				<ModalLayout>
					<ModalWhiteButton
						onClick={() => {
							props.setModal(false);
						}}
					>
						취소
					</ModalWhiteButton>
					<ModalGreenButton
						onClick={() => {
							cartAllDelete(deleteFunc, token);
						}}
					>
						확인
					</ModalGreenButton>
				</ModalLayout>
			</ModalFrame>
		</ModalBackdrop>
	);
}
