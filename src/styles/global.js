import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    color: #585858;
    -webkit-font-smoothing: antialiased;
  }


  a{
    text-decoration: none;
    color: #585858;
  }

  #root{
    display: flex;
  }

`;
