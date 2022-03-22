import { createGlobalStyle } from 'styled-components';
import mobileLightBg from '../assets/bg-mobile-light.jpg';
import desktopLightBg from '../assets/bg-desktop-light.jpg';

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${(props) => props.theme.colors.backgroundImageMobile});
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};

    @media screen and (min-width: 380px) {
        background-image: url(${(props) => props.theme.colors.backgroundImageDesktop}); 
        background-size: auto;
    }
}`;

export default GlobalStyle;
