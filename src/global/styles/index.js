import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow:0;
    background: white;
    font-family: Helvetica, Sans-Serif;
    scrollbar-base-color: #C0C0C0;
    scrollbar-base-color: #C0C0C0;
    scrollbar-3dlight-color: #C0C0C0;
    scrollbar-highlight-color: #C0C0C0;
    scrollbar-track-color: #EBEBEB;
    scrollbar-arrow-color: black;
    scrollbar-shadow-color: #00aa96;
    scrollbar-dark-shadow-color:#C0C0C0;
  }

  ::-webkit-scrollbar-track {
    background-color: #1d1d1d;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
    background: #F4F4F4;
  }

  ::-webkit-scrollbar-thumb {
      background: #00aa96;
      border:solid 2px #1d1d1d;
  }
  
`;
 
export default GlobalStyle;