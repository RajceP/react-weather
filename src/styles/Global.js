import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction:column;
    justify-content:center;
    min-height:100vh;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    background-color: #242424;
    color: white;
  }
`;

export default GlobalStyle;
