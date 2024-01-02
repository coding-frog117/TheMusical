import React from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import OrderInfo from '../organisms/OrderInfo';
import DeliveryInfo from '../organisms/DeliveryInfo';
import Payment from '../organisms/Payment';
import { FormProvider, useForm } from 'react-hook-form';
import { usePost } from '../../hooks/useFetch';
import orderDirect from '../../apis/orderDirect';

export default function OrderTemplates() {
	const postFunc = usePost('order');
	const methods = useForm();
	const { handleSubmit } = methods;

	return (
		<HomeLayout>
			<PageTitle text="주문/결제하기" />
			<OrderInfo />
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(async (data) => {
						await orderDirect(postFunc, data, id, quantity, total_price).then((res) => {
							return res;
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
