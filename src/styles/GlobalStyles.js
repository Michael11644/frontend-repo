// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }

  button {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .page-container {
    padding: 20px;
    min-height: 100vh;
    background-color: white;
  }
`;

export default GlobalStyle;





