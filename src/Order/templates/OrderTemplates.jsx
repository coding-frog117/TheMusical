import React from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import OrderInfo from '../organisms/OrderInfo';
import DeliveryInfo from '../organisms/DeliveryInfo';
import Payment from '../organisms/Payment';
import { FormProvider, useForm } from 'react-hook-form';
import { usePost } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import orderCartAll from '../../apis/orderCartAll';

export default function OrderTemplates() {
	const location = useLocation();
	const postFunc = usePost('order/');

	const methods = useForm();
	const { handleSubmit } = methods;
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});
	const itemPrice = useSelector((state) => {
		return state.totalCartPriceSlice.value - state.selectedItemSlice.item;
	});
	const fee = useSelector((state) => {
		return state.deliveryFeeSlice.value - state.selectedItemSlice.fee;
	});

	return (
		<HomeLayout>
			<PageTitle text="주문/결제하기" />
			<OrderInfo />
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(async (data) => {
						console.log(data);
						await orderCartAll(postFunc, token, data, Number(itemPrice + fee)).then((res) => {
							if (window.confirm('주문이 완료되었습니다. 주문 목록으로 가시겠습니까?')) {
								navigator('/mypage');
							} else {
								window.location.reload();
							}
						});
					})}
				>
					<DeliveryInfo />
					<Payment />
				</form>
			</FormProvider>
		</HomeLayout>
	);
}
