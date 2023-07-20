import styled from 'styled-components'

const GrayBox = styled.div`
    width : 100%;
    height : 60px;
    background-color : ${(props)=>props.theme.whiteGray};
    border-radius : ${(props)=>props.theme.radiusLg};
    padding : 19px 0 18px 30px;
    margin-bottom : 35px;
`

export default GrayBox;