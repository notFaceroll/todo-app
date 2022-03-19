import { createGlobalStyle } from 'styled-components';
import mobileLightBg from '../assets/bg-mobile-light.jpg';

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${mobileLightBg}); 
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    border: 2px solid red;
    height: 100vh;
    background-color: hsl(0, 0%, 98%);
}`;

export default GlobalStyle;
