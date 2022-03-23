import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';
import bgLightDt from '../assets/bg-desktop-light.jpg';
import bgLightMb from '../assets/bg-mobile-light.jpg';
import bgDarkDt from '../assets/bg-desktop-dark.jpg';
import bgDarkMb from '../assets/bg-mobile-dark.jpg';

export const lightTheme = {
  background: '#FAFAFA',
  listBackground: '#FFF',
  paragraphs: '#9394A5', // Input text color, note paragraphs (todo text color)
  overallText: '#484B6A', // Input and todos text color
  completedText: '#777A92', // Decorated text marked as 'completed' (also)
  veryLightGrayishBlue: '#E4E5F1', // hover states
  border: '#D2D3DB', // border
  headerIcon: moonIcon,
  backgroundImageDesktop: bgLightDt,
  backgroundImageMobile: bgLightMb,
  buttonBackground: 'linear-gradient(to right, #57DDFF, #C058F3)',
};
export const darkTheme = {
  background: '#161722',
  listBackground: '#25273C',
  overallText: '#CACDE8', // Input and todos text color
  completedText: '#777A92', // decorated text marked as 'completed'
  lightGrayishBlueHover: '#E4E5F1', // hovered buttons
  veryDarkGrayishBlue: '#4D5066', // buttons text also?
  veryDarkGrayishBlue: '#393A4C', // 'clear completed'
  border: '#777A92', // border
  headerIcon: sunIcon,
  backgroundImageDesktop: bgDarkDt,
  backgroundImageMobile: bgDarkMb,
  buttonBackground: 'linear-gradient(to right, #57DDFF, #C058F3)',
};

// https://convertacolor.com/
