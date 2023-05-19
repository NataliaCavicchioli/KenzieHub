import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    border: none;
  }

  :root{
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;

    --gray-extra-dark: #121214;
    --gray-dark: #212529;
    --gray-less-dark: #343B41;
    --gray: #868E96;
    --gray-ligth: #F8F9FA;

    --white: #fff;

    --sucess: #3FE864;
    --failed: #E83F5B;
  }

  body, input, button {
    font-family: 'Inter';
  }

  body{
    background-color: var(--gray-extra-dark);
  }
`;

export default GlobalStyle;
