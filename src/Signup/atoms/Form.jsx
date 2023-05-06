import styled from 'styled-components'

const Form = styled.form`
  width : 100%;
  margin-bottom : 34px;
  border : 1px solid #C4C4C4;
  border-top : 0px;
  border-radius : 0 0 ${(props)=>props.theme.radiusLg} ${(props)=>props.theme.radiusLg};
  padding : 40px 35px 36px;
  background-color: #fff;
`
export default Form;