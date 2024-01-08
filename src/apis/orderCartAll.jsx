export default async function orderCartAll(postFunc, token, data, price) {
	const postData = {
		total_price: price,
		order_kind: 'cart_order',

		receiver: data.receiver,
		receiver_phone_number:
			data.receiver_phone_number_first + data.receiver_phone_number_second + data.receiver_phone_number_third,
		address: data.zonecode + data.address + data.detail_address,
		address_message: data.address_message,
		payment_method: data.payment_method,
	};
	const res = await postFunc(postData, token);

	try {
		if (res) {
			return res;
		}
	} catch (errors) {
		console.log(errors.message);
	}
}
