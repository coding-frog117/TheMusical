import React from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import OrderInfo from '../organisms/OrderInfo';
import DeliveryInfo from '../organisms/DeliveryInfo';
import Payment from '../organisms/Payment';
import { FormProvider, useForm } from 'react-hook-form';
import { usePost } from '../../hooks/useFetch';
import orderDirect from '../../apis/orderDirect';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OrderTemplates() {
	const location = useLocation();
	const { state } = location;
	const postFunc = usePost('order/');
	const methods = useForm();
	const { handleSubmit } = methods;
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	return (
		<HomeLayout>
			<PageTitle text="주문/결제하기" />
			<OrderInfo />
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(async (data) => {
						console.log(data);
						await orderDirect(postFunc, token, data, state.data.product_id, state.quantity, state.data.price).then(
							(res) => {
								console.log(res);
							}
						);
					})}
				>
					<DeliveryInfo />
					<Payment />
				</form>
			</FormProvider>
		</HomeLayout>
	);
}
