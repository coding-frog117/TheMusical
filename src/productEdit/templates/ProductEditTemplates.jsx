import RegistrationHeader from '../../ProductRegistration/atoms/RegistrationHeader';
import { Section } from '../../ProductRegistration/templates/ProductRegistrationTemplates';
import SellerHeader from '../../Common/Header/SellerHeader';
import React from 'react';
import Main from '../organisms/Main';

export default function ProductEditTemplates() {
	return (
		<Section>
			<RegistrationHeader text="상품 수정" />
			<Main />
		</Section>
	);
}
