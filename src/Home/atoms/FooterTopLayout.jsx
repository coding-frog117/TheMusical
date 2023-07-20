import styled from 'styled-components'

export const FooterTopLayout = styled.div`
    display : flex;
    justify-content : space-between;
    padding : 60px 0 30px;
    border-bottom : 1px solid ${(props)=>props.theme.lightGray};
`

export default FooterTopLayout;
