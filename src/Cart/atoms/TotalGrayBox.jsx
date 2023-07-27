import styled from 'styled-components'

const TotalGrayBox = styled.div`
    width : 100%;
    height : 150px;
    display : flex;
    background-color : ${(props)=>props.theme.whiteGray};
    border-radius : ${(props)=>props.theme.radiusLg};
    align-items : center;
    margin-bottom : 40px;
`

export default TotalGrayBox;