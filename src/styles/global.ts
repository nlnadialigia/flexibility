import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/sand-textures.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f0f0f5 url(${backgroundImage}) 100% top;
    background-size: cover;
    color: #130325;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Sansita', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
`;
