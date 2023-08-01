import styled from 'styled-components'

export const Paymentbox = styled.section`
    width : 480px;
    border : ${(props)=> props.theme.mainColor} 2px solid;
    border-radius : ${(props)=>props.theme.radiusLg};
    margin-top : 18px;
`
export default Paymentbox;