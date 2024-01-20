import React from 'react';
import EditInfo from './EditInfo';
import { Div } from '../../ProductRegistration/organisms/ProductInfo';
import ProductImage from '../../ProductRegistration/molecules/ProductImage';

export default function EditImageAndInfo(props) {
	return (
		<Div>
			<ProductImage image={props.image} setImage={props.setImage} editImage={props.editImage} />
			<EditInfo data={props.data} />
		</Div>
	);
}
