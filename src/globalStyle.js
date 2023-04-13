import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Thin.woff2') format('woff2');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-ExtraLight.woff2') format('woff2');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-ExtraBold.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Vazirmatn;
  src: url('/assets/fonts/webfonts/Vazirmatn-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
html {
    font-size: 16px;
}

body{
    margin: 0;
    direction: rtl;
    font-family: Vazirmatn;
    position: relative;
}
a{
    text-decoration: none;
}
ul , li{
    list-style: none;
    padding: 0;
    margin: 0;
}
* , *::after , *::before{
    box-sizing: border-box;
}
.container{
    max-width: 1300px;
    margin: 0 auto;
}
.full-container{
    width: 100%;
    padding:0 , 30px ;
}


`
export default GlobalStyle;