import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {   margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      overflow: visible;
}
 body {
      color: #FFFFFF;
      background: linear-gradient(90deg, rgba(5,21,33,1) 0%, rgba(12,37,55,1) 100%);      
      font-family: ${({ theme }) => theme.fontFamily.primary}; 
      


.main-content {
      
      display: flex;
}
 }
`;

export default GlobalStyle;
