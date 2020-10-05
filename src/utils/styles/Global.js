import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    background-image: url('https://source.unsplash.com/1920x1080/?nature,dark');
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
  }
`;

export default GlobalStyle;
