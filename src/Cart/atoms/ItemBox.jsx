import styled from 'styled-components'

export const ItemBox = styled.div`
    width : 100%;    
    height : 200px;
    border-radius : ${(props)=>props.theme.radiusLg};
    border : 2px solid #E0E0E0;
    padding : 20px 30px;
`

export default ItemBox;