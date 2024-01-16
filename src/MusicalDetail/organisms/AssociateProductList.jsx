import React from 'react';
import AssoiciateProduct from '../molecules/AssoiciateProduct';
import InlineText from '../../Common/InlineText';
import AssociateListLayout from '../atoms/AssociateListLayout';
import styled from 'styled-components';

const Div = styled.section`
	height: 100%;
`;

export default function AssociateProductList() {
	const data = [1, 2, 3];
	return (
		<Div>
			<InlineText text="관련 상품" fontSize="20px" />
			<AssociateListLayout>
				{data.map(() => {
					return <AssoiciateProduct />;
				})}
			</AssociateListLayout>
		</Div>
	);
}
