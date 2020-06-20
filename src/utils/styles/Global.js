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
    background: rgb(18,18,18);
    background: radial-gradient(circle, rgba(18,18,18,1) 0%, rgba(36,36,36,1) 75%);
    color: white;
  }
`;

export default GlobalStyle;
