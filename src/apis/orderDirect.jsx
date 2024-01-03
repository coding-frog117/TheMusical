export default async function orderDirect(postFunc, data, id, quantity, total_price) {
	const postData = {
		product_id: id,
		quantity: quantity,
		order_kind: 'direct_order',

		reciever: data.reciever,
		reciever_phone_number: data.reciever_phone_number,
		address: data.address,
		address_message: data.address_message,
		payment_method: data.payment_method,
		total_price: total_price,
	};

	const res = await postFunc(postData);

	try {
		if (res) {
			return res;
		}
	} catch (errors) {
		console.log(errors.message);
	}
}
