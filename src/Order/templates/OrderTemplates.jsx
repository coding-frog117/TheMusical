import React, { useEffect, useState } from 'react';
import { HomeLayout } from '../../Common/HomeLayout';
import PageTitle from '../../Common/PageTitle';
import DeliveryInfo from '../organisms/DeliveryInfo';
import Payment from '../organisms/Payment';
import { FormProvider, useForm } from 'react-hook-form';
import { useGet, usePost } from '../../hooks/useFetch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import orderCartAll from '../../apis/orderCartAll';
import CartOrderInfo from '../organisms/CartOrderInfo';
import OneOrderInfo from '../organisms/OneOrderInfo';
import orderDirect from '../../apis/orderDirect';

export default function OrderTemplates() {
	const navigator = useNavigate();
	const postFunc = usePost('order/');
	let { id } = useParams();
	const getFunc = useGet(`products/${id}`);
	const [price, setPrice] = useState([]);
	const { state } = useLocation();

	useEffect(() => {
		if (id) {
			getFunc().then((res) => {
				return setPrice(res.data.price);
			});
		}
	});

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
			{id == undefined ? <CartOrderInfo /> : <OneOrderInfo />}
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(async (data) => {
						console.log(data);
						if (id == undefined) {
							await orderCartAll(postFunc, token, data, Number(itemPrice + fee)).then((res) => {
								if (window.confirm('주문이 완료되었습니다. 주문 목록으로 가시겠습니까?')) {
									navigator('/mypage');
								} else {
									window.location.reload();
								}
							});
						} else {
							await orderDirect(postFunc, token, data, id, state.quantity, price).then((res) => {
								if (window.confirm('주문이 완료되었습니다. 주문 목록으로 가시겠습니까?')) {
									navigator('/mypage');
								} else {
									window.location.reload();
								}
							});
						}
					})}
				>
					<DeliveryInfo />
					<Payment />
				</form>
			</FormProvider>
		</HomeLayout>
	);
}
