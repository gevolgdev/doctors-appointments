import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; box-sizing: border-box; ::-webkit-scrollbar{ display: none}}

  body {
    font-family: 'Inter', sans-serif;
    background: #0B181D;
    font-size: 16px;
  }
`