import React from 'react';
import RegistrationHeader from '../atoms/RegistrationHeader';
import Main from '../organisms/Main';
import styled from 'styled-components';
import SellerHeader from '../../Common/Header/SellerHeader';

export const Section = styled.section`
	width: 1720px;
	margin: 0 auto;
	padding: 44px 0 136px;
`;

export default function ProductRegistrationTemplates() {
	return (
		<Section>
			<RegistrationHeader text="상품 등록" />
			<Main />
		</Section>
	);
}
