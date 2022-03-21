import { createGlobalStyle } from 'styled-components';
import mobileLightBg from '../assets/bg-mobile-light.jpg';
import desktopLightBg from '../assets/bg-desktop-light.jpg';

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

    @media screen and (min-width: 380px) {
        background-image: url(${desktopLightBg}); 
        background-size: auto;
    }
}`;

export default GlobalStyle;
