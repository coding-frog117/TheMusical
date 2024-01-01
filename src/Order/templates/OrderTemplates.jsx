import React from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import OrderInfo from '../organisms/OrderInfo';
import DeliveryInfo from '../organisms/DeliveryInfo';
import Payment from '../organisms/Payment';
import { FormProvider, useForm } from 'react-hook-form';

export default function OrderTemplates() {
	const methods = useForm();
	const { handleSubmit } = methods;

	return (
		<HomeLayout>
			<PageTitle text="주문/결제하기" />
			<OrderInfo />
			<FormProvider {...methods}>
				<form
					onSubmit={() => {
						handleSubmit();
					}}
				>
					<DeliveryInfo />
					<Payment />
				</form>
			</FormProvider>
		</HomeLayout>
	);
}
