import React from 'react';
import { Div } from '../../ProductRegistration/organisms/ProductInfo';
import ProductEditName from '../molecules/ProductEditName';
import ProductEditPrice from '../molecules/ProductEditPrice';
import DeliveryOptions from '../../ProductRegistration/molecules/DeliveryOptions';
import ProductEditDelliveryFee from '../molecules/ProductEditDelliveryFee';
import ProductEditStock from '../molecules/ProductEditStock';

export default function EditInfo(props) {
	return (
		<Div>
			<ProductEditName name={props.data?.product_name} />
			<ProductEditPrice price={props.data?.price} />
			<DeliveryOptions method={props.data?.shipping_method} />
			<ProductEditDelliveryFee fee={props.data?.shipping_fee} />
			<ProductEditStock stock={props.data?.stock} />
		</Div>
	);
}
