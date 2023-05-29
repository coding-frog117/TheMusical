import styled from 'styled-components'

export const ProductLayout = styled.div`
    display : flex;
    gap : ${(props)=>props.gap ? props.gap : "50px"};
`

export default ProductLayout;
