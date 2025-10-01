
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-base-color: transparent;
    scrollbar-arrow-color: transparent;
    scrollbar-face-color: #BF4343;
    scrollbar-track-color: transparent;
    font-family: 'DM Sans', sans-serif;
    

    &::-webkit-scrollbar{
      background-color: transparent;
      width: 6px;
        
    }              

    &::-webkit-scrollbar-thumb{
      background-color: #BF4343;
      border-radius: 15px;
    }                             
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }   
`;

export default GlobalStyles;
