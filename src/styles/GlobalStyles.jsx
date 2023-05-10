import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import spoqaThin from '../styles/fonts/SpoqaHanSansNeo-Thin.woff2';
import spoqaLight from '../styles/fonts/SpoqaHanSansNeo-Light.woff2'
import spoqaRegular from '../styles/fonts/SpoqaHanSansNeo-Regular.woff2'
import spoqaMedium from '../styles/fonts/SpoqaHanSansNeo-Medium.woff2'
import spoqaBold from '../styles/fonts/SpoqaHanSansNeo-Bold.woff2'

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face{
        font-family : 'Spoqa Han Sans Neo';
        src : url(${spoqaThin}) format("woff2");
        font-weight : 100;
       
    }
    
    @font-face{
        font-family : 'Spoqa Han Sans Neo';
        src : url(${spoqaLight}) format("woff2");
        font-weight : 300;
    }

    @font-face{
        font-family : 'Spoqa Han Sans Neo';
        src : url(${spoqaRegular}) format("woff2");
        font-weight : 400;
    }
    @font-face{
        font-family : 'Spoqa Han Sans Neo';
        src : url(${spoqaMedium}) format("woff2");
        font-weight : 500;
    }
    @font-face{
        font-family : 'Spoqa Han Sans Neo';
        src : url(${spoqaBold}) format("woff2");
        font-weight : 700;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin : 0 auto;
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, button, input{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
        
    }
    body{
        line-height: 1;
        font-family : 'Spoqa Han Sans Neo' ,sans-serif;
        font-weight : 400;
        background-color: #F6F9F0;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`

export default GlobalStyles;