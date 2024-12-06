import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    cursor: none; // We'll use custom cursor
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles; 