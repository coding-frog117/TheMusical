import styled from 'styled-components'

const OrderInputBox = styled.div`
    width : 100%;
    height : 56px;
    display : flex;
    gap : 140px;
    align-items : center;
    padding : 8px 0;
    border-bottom : 1px solid ${(props)=>props.theme.lightGray};
`

export default OrderInputBox;
