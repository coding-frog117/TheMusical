import styled from 'styled-components';

export const ProductLayout = styled.div`
	width: 1720px;
	margin: 0 auto;
	display: flex;
	gap: ${(props) => (props.gap ? props.gap : '50px')};
`;

export default ProductLayout;
